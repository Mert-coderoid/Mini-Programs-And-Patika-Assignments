import  menu  from './URL.js';
let val = menu();

let button = document.querySelector(".btn-container")
let menuContainer = document.querySelector(".section-center")

function createButton(btnName) {
    let btn = `<button class="btn btn-outline-dark btn-item" id="${btnName}">${btnName}</button>`
    return btn
}

function addButton() {
    button.innerHTML =
    `
    ${createButton("All")}
    ${createButton("Korea")}
    ${createButton("Japan")}
    ${createButton("China")}
    `

    document.querySelector(`#All`).addEventListener("click", allFoods)
    document.querySelector(`#Korea`).addEventListener("click", koreaFoods)
    document.querySelector(`#Japan`).addEventListener("click", japanFoods)
    document.querySelector(`#China`).addEventListener("click", chinaFoods)

}

addButton()

function allFoods() {
    let allMenu = ""

    val.map(item => {
        allMenu += createFood(item)
        menuContainer.innerHTML = allMenu
    })
    menuContainer.innerHTML = allMenu
}


function koreaFoods() {
    let allMenu = ""
    val.map(item => {
        if (item.category === "Korea") {
            allMenu += createFood(item)
        }
    })
    menuContainer.innerHTML = allMenu
}

function japanFoods() {
    let allMenu = ""
    val.map(item => {
      if (item.category === "Japan") {
        allMenu += createFood(item)
      }
    })
    menuContainer.innerHTML = allMenu
  }
  
  function chinaFoods() {
    let allMenu = ""
    val.map(item => {
      if (item.category === "China") {
        allMenu += createFood(item)
      }
    })
    menuContainer.innerHTML = allMenu
  }
  

  function createFood(food) {
    let item = `
    <div class="menu-items col-lg-6 col-sm-12">
    <img src="${food.img}" alt="${food.title}" class="photo">
    <div class="menu-info">
                <div class="menu-title">
                  <h4>${food.title}</h4>
                  <h4 class="price">${food.price}</h4>
                </div>
                <div class="menu-text">
                ${food.desc}
                </div>
              </div>
            </div>
          `
    return item
  }
  
  allFoods()
  