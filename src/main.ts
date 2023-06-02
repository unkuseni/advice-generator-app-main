//  Get the element with the class name "card"
const card = document.querySelector("card");
const svgContainer = document.querySelector("#svg-div");
// add a background color to the svg container
// svgContainer.style.backgroundColor = "red";
window.addEventListener("resize", () => {
  
  if (window.matchMedia("(max-width: 767px)").matches) {
    svgContainer.innerHTML =
      '<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';
  } else {
    svgContainer.innerHTML =
      '<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#ffffff"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>';
  }
})
// use a quotes api
