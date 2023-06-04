const generateAdvice = () => {
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(response => response.json())
  .then(data => console.log(data[0]))
  .catch(error => console.error(error));
};
let button = document.getElementById("generate");
if (button) {
  button.onclick = generateAdvice;
};