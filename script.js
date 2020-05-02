// Plus Button Event Handler 
const plusButton = document.getElementById("plus-btn").addEventListener("click", function(){
    const totalAdd = getPlusMobile("current-value");
    const totalMobileAmount = totalAdd * 1219;
    document.getElementById("priceOfMobile").innerText = totalMobileAmount; 
    const TotalPrice = totalPrice();
})

// Minus Button Event Handler Working 
const minusButton = document.getElementById("minus-btn").addEventListener("click",function(){
    const totalMinus = getMinuButton("current-value");
    const totalMobileAmount = totalMinus * 1219;
    document.getElementById("priceOfMobile").innerText = totalMobileAmount;
    const TotalPrice = totalPrice();
})

// Plus Mobile Case Event Handler
const casePlusButton = document.getElementById("plus-case").addEventListener("click",function(){
    const totalCase = getPlusMobile("caseNumber");
    const totalCaseAmount = totalCase * 59;
    document.getElementById("currentCaseValue").innerText = totalCaseAmount;
    const TotalPrice = totalPrice();
})

// Minus Mobile Case Event Handler
const caseMinusButton = document.getElementById("minus-case").addEventListener("click", function(){
    const totalCaseMinus = getMinuButton("caseNumber");
    const totalCaseOfAmount = totalCaseMinus * 59;
    document.getElementById("currentCaseValue").innerText = totalCaseOfAmount;
    const TotalPrice = totalPrice();
    
})


function getPlusMobile(id){
    const currentNumber =getCurrentNumber(id);
    const totalAddNumber = currentNumber + 1;
    document.getElementById(id).value = totalAddNumber;
    //console.log(totalAddNumber);
    return totalAddNumber;  
}

function getMinuButton(id){
    const currentNumber = getCurrentNumber(id);
    const totalMinusQuantity = currentNumber -1;
    if (totalMinusQuantity >= 0){
        console.log(totalMinusQuantity);
    }else{
        return 0;
    }
    document.getElementById(id).value = totalMinusQuantity;
    return totalMinusQuantity;
    
}

function getCurrentNumber(id){
    const addValue = document.getElementById(id).value;
    const currentAmount = parseFloat(addValue);
    return currentAmount;
}

function totalPrice(){
    const mobilePrice = document.getElementById("priceOfMobile").innerText;
    const mobilePriceNumber = parseFloat(mobilePrice);
    const casePrice = document.getElementById("currentCaseValue").innerText;
    const casePriceNumber = parseFloat(casePrice);
    const totalPriceNumber = mobilePriceNumber + casePriceNumber;
    document.getElementById("subtotal").innerText = totalPriceNumber;
    document.getElementById("total").innerText = totalPriceNumber;
    return totalPriceNumber;
}