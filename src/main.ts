/**
 * Generates a Ron Swanson quote from an API.
 * 
 * @returns A Promise that resolves to a string with the quote.
 */
const generateAdvice = async (): Promise<string> => {
  const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  const data = await response.json();
  return data[0];
};
let button = document.getElementById("generate");
if (button) {
  button.onclick = generateAdvice;
};