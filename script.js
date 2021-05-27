// ================== Calculation for First Class ========================
function increaseFirstClass(){
    var firstClass = document.getElementById('firstClassCount');
    var firstClassCount = firstClass.value;
    var newFirstClassCount = parseInt(firstClassCount) + 1;
    firstClass.value = newFirstClassCount;

    updateFirstClassPrice();
}

function decreaseFirstClass(){
    var firstClass = document.getElementById('firstClassCount');
    var firstClassCount = firstClass.value;
    var newFirstClassCount = parseInt(firstClassCount) - 1;
    if(newFirstClassCount >= 0){
        firstClass.value = newFirstClassCount;
    }
    updateFirstClassPrice();
}

function updateFirstClassPrice(){
    var newFirstClassCount = document.getElementById('firstClassCount').value;
    

    // var total = newFirstClassCount * 150;
    // document.getElementById("subtotal").innerText = total;

    // var vat = total * 0.1;
    // document.getElementById('vat').innerText = vat;

    // var firstClassTotal = total + vat;
    // document.getElementById('total').innerText = firstClassTotal;
    totalPrice();
}


// ================== Calculation for Economy Class =======================
function increaseEconomyClass(){
    var economyClass = document.getElementById('economyClassCount');
    var economyClassCount = economyClass.value;
    var newEconomyClassCount = parseInt(economyClassCount) + 1;
    economyClass.value = newEconomyClassCount;

    updateEconomyPrice();
}

function decreaseEconomyClass(){
    var economyClass = document.getElementById('economyClassCount');
    var economyClassCount = economyClass.value;
    var newEconomyClassCount = parseInt(economyClassCount) - 1;
    if(newEconomyClassCount >= 0){
        economyClass.value = newEconomyClassCount;
    }
    updateEconomyPrice();
}

function updateEconomyPrice(){
    var newEconomyClassCount = document.getElementById('economyClassCount').value;

    // var total = newEconomyClassCount * 100;
    // document.getElementById("subtotal").innerText = total;

    // var vat = total * 0.1;
    // document.getElementById('vat').innerText = vat;

    // var economyClassTotal = total + vat;
    // document.getElementById('total').innerText = economyClassTotal;
    totalPrice();
}

// ============================= Total Calculation =========================
function totalPrice(){
    var newFirstClassCount = document.getElementById('firstClassCount').value;
    var firstTotal = newFirstClassCount * 150.00;
    console.log(firstTotal)

    var newEconomyClassCount = document.getElementById('economyClassCount').value;
    var economyTotal = newEconomyClassCount * 100.00;

    var subtotalPrice = (firstTotal + economyTotal).toFixed(2);
    document.getElementById('subtotal').innerText = subtotalPrice;
    
    var vat = (subtotalPrice * 0.1).toFixed(2);
    document.getElementById('vat').innerText = vat;

    var grandTotal = (parseFloat(subtotalPrice) +parseFloat(vat)).toFixed(2);
    document.getElementById('total').innerText = grandTotal;
    console.log("Total: ", grandTotal);

}