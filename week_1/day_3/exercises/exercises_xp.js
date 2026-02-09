// ===== Exercise 1
<article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
</article>
// 1 -Récupérer le h1 et l’afficher
const h1 = document.querySelector("h1");
console.log(h1);
// 2-Supprimer le dernier paragraphe
const article = document.querySelector("article");
const lastParagraph = article.lastElementChild;
article.removeChild(lastParagraph);
// 3-Changer le background du h2 en rouge au clic

const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
}
);

// 4-Cacher le h3 au clic
const h3 = document.querySelector("h3");  
h3.addEventListener("click", () => {
  h3.style.display = "none";
}
);
w
const button = document.createElement("button");
button.textContent = "Changer la taille de la police";
document.body.appendChild(button);

// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...