const dictionary = [
  { en: "animal", pl: "zwierzę" },
  { en: "apple", pl: "jabłko" },
  { en: "bathroom", pl: "łazienka" },
  { en: "book", pl: "książka" },
  { en: "boy", pl: "chłopiec" },
  { en: "bread", pl: "chleb" },
  { en: "car", pl: "samochód" },
  { en: "coffee", pl: "kawa" },
  { en: "dog", pl: "pies" },
  { en: "dream", pl: "marzenie" },
  { en: "fruit", pl: "owoc" },
  { en: "girl", pl: "dziewczyna" },
  { en: "he", pl: "on" },
  { en: "house", pl: "dom" },
  { en: "man", pl: "człowiek" },
  { en: "milk", pl: "mleko" },
  { en: "office", pl: "biuro" },
  { en: "she", pl: "ona" },
  { en: "sun", pl: "słońce" },
  { en: "tree", pl: "drzewo" },
  { en: "water", pl: "woda" },
  { en: "woman", pl: "kobieta" }
];


//const words = [
//    { pl: "kot", en: "cat" },
//    { pl: "pies", en: "dog" },
//    { pl: "dom", en: "house" },
//    { pl: "woda", en: "water" },
//    { pl: "książka", en: "book" }
//];

const container = document.getElementById("card-container");

function getRandomWords(dictionary, count = 8) {
  // Make a shallow copy so we don't mutate the original
  const words = [...dictionary];

  // Shuffle using Fisher–Yates
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }

  // Return the first `count` items
  return words.slice(0, count);
}

let words = getRandomWords(dictionary, 8);
console.log(words)

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