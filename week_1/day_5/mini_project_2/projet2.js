// Web Audio API context
let audioContext = null;

// Initialiser l'AudioContext après une interaction utilisateur
function initAudioContext() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('✅ AudioContext initialized:', audioContext.state);

            // Reprendre le contexte s'il est suspendu
            if (audioContext.state === 'suspended') {
                audioContext.resume().then(() => {
                    console.log('✅ AudioContext resumed');
                });
            }
        } catch (error) {
            console.error('❌ Error initializing AudioContext:', error);
        }
    }
    return audioContext;
}

// Fonction pour créer des sons synthétiques
function createSound(type) {
    try {
        const ctx = initAudioContext();
        if (!ctx) {
            console.error('❌ AudioContext not available');
            return;
        }

        // S'assurer que le contexte est actif
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        console.log(`🎵 Playing sound: ${type}`);

        // Configuration selon le type de son
        switch (type) {
            case 'A': // Boom - son grave
                oscillator.frequency.value = 60;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.5);
                break;
            case 'S': // Clap - bruit blanc court
                oscillator.frequency.value = 1000;
                oscillator.type = 'square';
                gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.1);
                break;
            case 'D': // HiHat - son aigu court
                oscillator.frequency.value = 8000;
                oscillator.type = 'square';
                gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.05);
                break;
            case 'F': // Kick - son très grave
                oscillator.frequency.value = 150;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                // Pitch bend pour effet kick
                oscillator.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.3);
                break;
            case 'G': // OpenHat - son aigu moyen
                oscillator.frequency.value = 6000;
                oscillator.type = 'square';
                gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.15);
                break;
            case 'H': // Ride - son métallique
                oscillator.frequency.value = 3000;
                oscillator.type = 'sawtooth';
                gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.2);
                break;
            case 'J': // Snare - son percussif
                oscillator.frequency.value = 200;
                oscillator.type = 'triangle';
                gainNode.gain.setValueAtTime(0.25, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.2);
                break;
            case 'K': // Tink - son aigu très court
                oscillator.frequency.value = 10000;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.03);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.03);
                break;
            case 'L': // Tom - son grave moyen
                oscillator.frequency.value = 120;
                oscillator.type = 'sine';
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.4);
                break;
            default:
                console.warn(`⚠️ Unknown sound type: ${type}`);
        }
    } catch (error) {
        console.error(`❌ Error creating sound for ${type}:`, error);
    }
}

function playSound(letter) {
    const key = document.querySelector(`.key[data-key="${letter.toUpperCase()}"]`);

    if (!key) {
        console.warn(`⚠️ Key not found for letter: ${letter}`);
        return;
    }

    // Jouer le son synthétique
    createSound(letter.toUpperCase());

    // Ajouter l'effet visuel
    key.classList.add('playing');
}

// Écouter les touches du clavier
window.addEventListener('keydown', (e) => {
    playSound(e.key);
});

// Écouter les clics sur les touches
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', function () {
        const letter = this.querySelector('kbd').textContent;
        playSound(letter);
    });
});

// Retirer l'animation après la transition
keys.forEach(key => {
    key.addEventListener('transitionend', function (e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    });
});

// Message de bienvenue
console.log('🥁 Drum Kit chargé! Cliquez sur un pad ou appuyez sur A-S-D-F-G-H-J-K-L');