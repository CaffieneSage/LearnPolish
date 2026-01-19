const words = [
    { pl: "kot", en: "cat" },
    { pl: "pies", en: "dog" },
    { pl: "dom", en: "house" },
    { pl: "woda", en: "water" },
    { pl: "książka", en: "book" }
];

const container = document.getElementById("card-container");

words.forEach(word => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-face front">${word.pl}</div>
            <div class="card-face back">${word.en}</div>
        </div>
    `;

    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });

    container.appendChild(card);
});