//Menyobjekt
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

//Varukorg-array
let basket = [];

let newOrderPage = document.getElementById("new-order-page");
let startPage = document.getElementById("startpage");
let currentOrderPage = document.getElementById("current-order-page");

//Funktion som körs efter att sidan laddat klart
window.addEventListener("load", function(){

    console.log("load");

    let newOrderButton = document.getElementById("new-order-button");
    newOrderButton.addEventListener("click", showNewOrderPage);

    let backArrow = document.getElementById("back-arrow");
    backArrow.addEventListener("click", showStartPage);

    let basketIcon = document.getElementById("basket-icon");
    basketIcon.addEventListener("click", showCurrentOrderPage);

    let basketBackArrow = document.getElementById("basket-back-arrow");
    basketBackArrow.addEventListener("click", showNewOrderPage);

    buildMenu();

});

//Funktion som bygger upp menyn baserat på menu-objektet längst upp i filen
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

        let plusDiv = document.createElement("div");
        plusDiv.classList.add("col-2");
        plusDiv.innerHTML = '<svg class="symbol plus float-right" xmlns="http://www.w3.org/2000/svg" width="2.3rem" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/></svg>'
        plusDiv.addEventListener("click", function(){
            addDishToBasket(dish);
        })

        row.appendChild(priceDiv);
        row.appendChild(plusDiv);
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

function addDishToBasket(dish){
    basket.push(
        {
            name: dish.name,
            price: dish.price,   
        }
    );
    console.log(basket);
    updateBasket();
}

function updateBasket(){
    let basketDiv = document.getElementById("basket");
    basketDiv.innerHTML = "";
    
    let productAmount = 0;
    let sum = 0;
    let basketSum = document.getElementById("basketSum");
    let newOrderAmount = document.getElementById("new-order-amount");

    basket.forEach((dish, i) => {

        //Uppdatera summa
        sum += dish.price;
        productAmount += 1;

        //Bygg upp div med en maträtt
        let row = document.createElement("div");
        row.classList.add("row", "custom-box", "m-3", "box-shadow");

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("col-12", "p-3");
        let title = document.createElement("h5");
        title.classList.add("font-weight-normal");
        title.innerText = dish.name;
        titleDiv.appendChild(title);

        row.appendChild(titleDiv);

        let priceDiv = document.createElement("div");
        priceDiv.classList.add("col-8");
        let price = document.createElement("p");
        price.innerText = dish.price + "kr";
        priceDiv.appendChild(price);

        let plusDiv = document.createElement("div");
        plusDiv.classList.add("col-4");
        plusDiv.innerHTML = '<svg class="symbol minus float-right mx-1" xmlns="http://www.w3.org/2000/svg" width="2.3rem" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/></svg>';
        plusDiv.innerHTML += '<svg class="symbol plus float-right mx-1" xmlns="http://www.w3.org/2000/svg" width="2.3rem" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/></svg>'
        
        row.appendChild(priceDiv);
        row.appendChild(plusDiv);

        basketDiv.appendChild(row);
    });

    basketSum.innerText = "Summa för " + productAmount + " produkter: " + sum + "kr";
    newOrderAmount.innerText = "Nuvarande beställning("+sum+"kr)";
}

function showNewOrderPage(){
    console.log("showing new order page");
    hidePage(startPage, currentOrderPage);
    showPage(newOrderPage);
}

function showCurrentOrderPage(){
    console.log("showing current order page / checkout");
    hidePage(newOrderPage, startPage);
    showPage(currentOrderPage);
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
