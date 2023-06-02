let card: HTMLElement | null = document.getElementById("app");
// let the text content of the card be "Hello World"
let svgDiv = document.createElement("div");
svgDiv.setAttribute("class", "divider");
let header = document.createElement("header");
let quote = document.createElement("blockquote");
let advice: string = "\'Just do it!'";
header.textContent = "Advice #001";
quote.textContent = `${advice}`;
if (card) {
  card.appendChild(header);
  card.appendChild(quote);
  card.appendChild(svgDiv);
};
console.log(card);