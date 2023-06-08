# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview
This is an advice generator app that generates random advice using the Ron Swanson API.
### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](/screenshot/localhost_5173_(iPhone%20SE).png)
![](/screenshot/Web%20capture_7-6-2023_183523_localhost.jpeg)


### Links

- Solution URL: [Solution URL](https://github.com/unkuseni/advice-generator-app-main)
- Live Site URL: [Live site URL](https://boisterous-syrniki-00461c.netlify.app/)

## My process
<!-- Write a step by step process of how the site was built here -->
- I researched and found an api for the site.
- I used the api to generate a random advice.
- Since the api didn't return an id. I randomly generated one for each request.
- Parse the data and styled the entire site.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Typescript
- Vite

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some JS code I'm proud of</h1>
```
```ts
const generateQuoteOnLoad = async () => {
  const figure = generateFigure();
  await generateAdvice().then((advice) => {
    if (quote) {
      quote.textContent = `"${advice}"`;
    }
    if (header) {
      header.textContent = "Advice" + " " + `${figure}`;
    }
  });
}

window.onload = generateQuoteOnLoad;
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Continued development

I would like to use the  quotes free api instead since that gives much more info about the author, tags, and more. 


### Useful resources

- [MDN](https://mozilla.org/) - This is an amazing article which helped me finally understand async/await. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Unkuseni](https://github.com/unkuseni)
- Frontend Mentor - [@unkuseni](https://www.frontendmentor.io/profile/unkuseni)
- Twitter - [@unkuseni](https://www.twitter.com/unkuseni)



## Acknowledgments

