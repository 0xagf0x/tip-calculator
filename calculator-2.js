//Calculate Tip
function calculateTip() {
    var billInput = document.getElementById("billInput").value;
    var smallTip = .15;
    var medTip = .18;
    var largeTip = .2;
    
    //Make sure user types in a number
    if (billInput === "" || billInput === "0") {
        console.log("Please enter a value");
        document.getElementById("tipAmount").value = "Please enter an amount";
        return;
    }
    //Calculate tip
    var total;

    if (document.getElementById('selector').value == 'small'){
        total = billInput * smallTip;
    } else if (document.getElementById('selector').value == 'medium'){
        total = billInput * medTip;
    } else if (document.getElementById('selector').value == 'large'){
        total = billInput * largeTip;

    }
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows two digits after decimal point
    total = total.toFixed(2);

    //Display the tip
    document.getElementById("tipAmount").value = total;

}

document.getElementById('button').onclick = function () {
    calculateTip();
};