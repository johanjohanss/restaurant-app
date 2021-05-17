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
    newOrderPage.classList.add("d-none");
    startPage.classList.remove("d-none");
}