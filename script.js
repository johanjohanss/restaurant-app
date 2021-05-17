let menu = [
    {name:"Margherita", ingredients:["Tomatsås", "Ost"], allergies:[""], price:65, category: "Pizzor klass 1"},
    {name:"Vesuvio", ingredients:["Tomatsås", "Ost", "Skinka"], allergies:[""], price:65, category: "Pizzor klass 1" },
    {name:"Altono", ingredients:["Tomatsås", "Ost", "Tonfisk"], allergies:[""], price:65, category: "Pizzor klass 1" },  

    {name:"Calzone", ingredients:["Tomatsås", "Ost", "Skinka"], allergies:[""], price:80, category: "Pizzor klass 2" }, 
    {name:"Capricciosa", ingredients:["Tomatsås", "Ost", "Skinka", "Champinjoner"], allergies:[""], price:70, category: "Pizzor klass 2" }, 
    {name:"Tomaso", ingredients:["Tomatsås", "Ost", "Tonfisk", "Räkor"], allergies:["Räkor"], price:70, category: "Pizzor klass 2" }, 

    {name:"Bearnaisesås 10 cl", ingredients:[], allergies:[], price:10, category: "Såser" }, 

    {name:"Coca-Cola 33 cl", ingredients:[], allergies:[], price:15, category: "Drycker" }, 
]

let newOrderPage = document.getElementById("new-order-page");
let startPage = document.getElementById("startpage");

window.addEventListener("load", function(){

    console.log("load");

    let newOrderButton = document.getElementById("new-order-button");
    newOrderButton.addEventListener("click", showNewOrderPage);

    let backArrow = document.getElementById("back-arrow");
    backArrow.addEventListener("click", showStartPage);

    buildMenu();

});

function buildMenu(){
    let menuDiv = document.getElementById("menuDiv")
    let currentCategory = "Test";
    
    menu.forEach((dish) => {
        console.log(dish.name);

        if(currentCategory != dish.category){
            currentCategory = dish.category;
            let categoryDiv = document.createElement("div");
            categoryDiv.classList.add("col-12", "p-3");
            categoryDiv.setAttribute("id", currentCategory.replace(/\s/g, "").toLowerCase()); //Sätter id till kategorinamn utan whitespace
            let categoryTitle = document.createElement("h4");
            categoryTitle.innerText = dish.category;
            categoryDiv.appendChild(categoryTitle);
            menuDiv.appendChild(categoryDiv);
        }

        let row = document.createElement("div");
        row.classList.add("row", "custom-box", "m-3", "box-shadow");

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("col-12", "p-3");
        let title = document.createElement("h5");
        title.classList.add("font-weight-normal");
        title.innerText = dish.name;
        titleDiv.appendChild(title);

        row.appendChild(titleDiv);

        //Om kategori är såser eller drycker begöver vi ej skriva ut ingredienser och allergier?
        if(dish.category != "Såser" && dish.category != "Drycker"){
            let ingredientDiv = document.createElement("div");
            ingredientDiv.classList.add("col-12");
            let ingredients = document.createElement("p");
            ingredientDiv.appendChild(ingredients);
            
            dish.ingredients.forEach((ingredient, i) => { //i = index in array
                if(i < dish.ingredients.length - 1){
                    ingredients.innerText += ingredient + ", ";
                }else{  
                    ingredients.innerText += ingredient;
                }
            });

            let allergiesDiv = document.createElement("div");
            allergiesDiv.classList.add("col-12");
            let allergies = document.createElement("p");
            allergies.innerText += "Allergier: ";
            allergiesDiv.appendChild(allergies);

            dish.allergies.forEach((allergy, i) => {
                if(i < dish.allergies.length - 1){
                    allergies.innerText += allergy + ", ";
                }else{  
                    allergies.innerText += allergy;
                }
            });

            row.appendChild(ingredientDiv);
            row.appendChild(allergiesDiv);
        }

        

        let priceDiv = document.createElement("div");
        priceDiv.classList.add("col-10");
        let price = document.createElement("p");
        price.innerText = dish.price + "kr";
        priceDiv.appendChild(price);

        let minusDiv = document.createElement("div");
        minusDiv.classList.add("col-2");
        minusDiv.innerHTML = '<svg class="symbol plus float-right" xmlns="http://www.w3.org/2000/svg" width="2.3rem" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/></svg>'

        row.appendChild(priceDiv);
        row.appendChild(minusDiv);
        menuDiv.appendChild(row);
    });
    /* 
            <div class="row custom-box m-3 box-shadow">
                <div class="col-12 p-3">
                    <h5 class="font-weight-normal">Maträtt</h5>
                </div>
                <div class="col-12">
                    <p>Beskrivning</p>
                </div>
                <div class="col-12">
                    <p>Allegier: </p>
                </div>
                <div class="col-10">
                    <p>Pris: 250kr</p>
                </div>
                <div class="col-2">
                    <svg class="symbol plus float-right" xmlns="http://www.w3.org/2000/svg" width="2.3rem" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                    </svg>
                </div>
            </div>
    */
}

function showNewOrderPage(){
    console.log("showing new order page");
    newOrderPage.classList.remove("d-none");
    startPage.classList.add("d-none");
}

function showStartPage(){
    console.log("showing startpage");
    hidePage(newOrderPage);
    showPage(startPage);
}


function showPage(page){
    page.classList.remove("d-none");
}

//Skicka in minst en sida att dölja men kan också skicka in fler
//Om inga fler sidor skickas in sätts de till null
function hidePage(page1, page2, page3) {
    page2 = page2 || null;
    page3 = page3 || null;
  
    //Hide pages
    page1.classList.add("d-none");

    if(page2 != null){
        page2.classList.add("d-none");
    }
    if(page3 != null){
        page3.classList.add("d-none");
    }
}
