const card = document.getElementById('app');
const header = document.getElementById('header');
const quote = document.getElementById('quote');
/**
 * Generates a Ron Swanson quote from an API.
 * 
 * @returns A Promise that resolves to a string with the quote.
 */
const generateAdvice = async (): Promise<string> => {
  const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  const data = await response.json();
  console.log(data[0]);
  return data[0];
};
/**
 * Generates a random figure for the quote.
 */
const generateFigure = (): string => {
  let random = Math.floor(Math.random() * 1000) + 1;
  let figure = `#${random.toString().padStart(3, "0")}`;
  console.log(figure);
  return figure;
}
let button = document.getElementById("generate");
if (button) {
  button.onclick = async () => {
    const advice = await generateAdvice();
    const figure = generateFigure();
    if (header) {
      header.textContent = "Advice" + " " + `${figure}`;
    }
    if (quote) {
      quote.textContent = `${advice}`;
    }
  };
};
