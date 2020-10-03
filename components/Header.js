// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//




function Header() {
    const header = document.createElement("div");
    const date = document.createElement("span");
    const title = document.createElement("h1");
    const temp = document.createElement("span");
  
    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");
  
    date.textContent = "March 28, 2020";
    title.textContent = "Lambda Times";
    temp.textContent = "98°";
  
    header.append(date);
    header.append(title);
    header.appendChild(temp);
  
    return header
  }
  
  const headerContainer = document.querySelector('.header-container')
  headerContainer.appendChild(Header())
  