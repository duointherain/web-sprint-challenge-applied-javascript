// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {


const div1 = document.createElement('div')
const span1 = document.createElement('span')
const hOne = document.createElement('h1')
const span2 = document.createElement('div')


header-container.append(div1, span1, hOne, span2)

div1.classList.add('header')
span1.classList.add('date')
span2.classList.add('temp')

}
