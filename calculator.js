//Calculate Tip
function calculateTip() {
    var billInput = document.getElementById("billInput").value;
    var tip = .15;
    //validate input
    if (billInput === "0") {
        console.log("Please enter a value");
        return;
    }
   
    //Calculate tip
    var total = (billInput * tip);
   
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows two digits after decimal point
    total = total.toFixed(2);

    //Display the tip
    document.getElementById("tipAmount").value = total;
    
}

document.getElementById('button').onclick =  function(){
    calculateTip();

};