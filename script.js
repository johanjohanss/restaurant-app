let newOrderPage = document.getElementById("new-order-page");
let startPage = document.getElementById("startpage");

window.addEventListener("load", function(){

    console.log("load");

    let newOrderButton = document.getElementById("new-order-button");
    newOrderButton.addEventListener("click", showNewOrderPage);

    let backArrow = document.getElementById("back-arrow");
    backArrow.addEventListener("click", showStartPage)

});

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
