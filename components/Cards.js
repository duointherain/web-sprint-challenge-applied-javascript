// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

function cards(obj) {
    let res = axios.get(`https://lambda-times-api.herokuapp.com/articles`);

    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const div5 = document.createElement('div')
    const img = document.createElement('img')
    const span3 = document.createElement('span')
    
    
    
    header-container.append(div2, div3, div4, div5, img, span3)
    
    div2.classList.add('card')
    div3.classList.add('headline')
    div4.classList.add('author')
    div5.classList.add('img-container')
    

    
    }






//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
