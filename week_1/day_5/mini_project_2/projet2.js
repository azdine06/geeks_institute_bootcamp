// Configuration des sons
const soundConfig = {
    A: { freq: 60, type: 'sine', gain: 0.3, duration: 0.5, name: 'Boom' },
    S: { freq: 1000, type: 'square', gain: 0.2, duration: 0.1, name: 'Clap' },
    D: { freq: 8000, type: 'square', gain: 0.15, duration: 0.05, name: 'HiHat' },
    F: { freq: 150, type: 'sine', gain: 0.4, duration: 0.3, name: 'Kick', pitchBend: 40 },
    G: { freq: 6000, type: 'square', gain: 0.15, duration: 0.15, name: 'OpenHat' },
    H: { freq: 3000, type: 'sawtooth', gain: 0.12, duration: 0.2, name: 'Ride' },
    J: { freq: 200, type: 'triangle', gain: 0.25, duration: 0.2, name: 'Snare' },
    K: { freq: 10000, type: 'sine', gain: 0.1, duration: 0.03, name: 'Tink' },
    L: { freq: 120, type: 'sine', gain: 0.3, duration: 0.4, name: 'Tom' }
};

let audioContext = null;

// Initialiser l'AudioContext
function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    }
    return audioContext;
}

// Créer et jouer un son
function createSound(letter) {
    const config = soundConfig[letter];
    if (!config) return;

    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = config.type;
    oscillator.frequency.value = config.freq;
    gainNode.gain.setValueAtTime(config.gain, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + config.duration);

    // Effet pitch bend pour le kick
    if (config.pitchBend) {
        oscillator.frequency.exponentialRampToValueAtTime(config.pitchBend, ctx.currentTime + 0.1);
    }

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + config.duration);
}

// Jouer le son et ajouter l'effet visuel
function playSound(letter) {
    const upperLetter = letter.toUpperCase();
    const key = document.querySelector(`.key[data-key="${upperLetter}"]`);

    if (key) {
        createSound(upperLetter);
        key.classList.add('playing');
    }
}

// Événements clavier
window.addEventListener('keydown', (e) => playSound(e.key));

// Événements clic
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function () {
        playSound(this.querySelector('kbd').textContent);
    });

    key.addEventListener('transitionend', function (e) {
        if (e.propertyName === 'transform') {
            this.classList.remove('playing');
        }
    });
});

console.log('🥁 Drum Kit chargé! Appuyez sur A-S-D-F-G-H-J-K-L');