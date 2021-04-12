//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
function totalPhoneBill() {
//  * this function should read the string value entered - split it on a comma.
    var bill = billStringElement.value;
    var phoneBill = bill.split(',');
	var totalBill = 0; 
//  * loop over all the entries in the the resulting list
for(var i = 0; i < phoneBill.length; i++) {
    var billing = phoneBill[i].trim();
//  * check if it is a call or an sms and add the right amount to the overall total
    if (billing === "call") {
        totalBill = totalBill + 2.75;  
    } else if (billing === "sms") {
        totalBill = totalBill + 0.75;
    }
}
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
    var entireBill = totalBill.toFixed(2);
    billTotalElement.innerHTML = entireBill;
//link the function to a click event on the calculate button

if (entireBill >= 20 && entireBill < 30) {
    document.querySelector(".total").classList.add("warning");
    }else if (entireBill >= 30) {
        document.querySelector(".total").classList.remove("warning");
        document.querySelector(".total").classList.add("danger");
    }if(entireBill < 20){
	  document.querySelector(".total").classList.remove("warning");
        document.querySelector(".total").classList.remove("danger");    
    }else if(entireBill < 30){
	  document.querySelector(".total").classList.add("warning");
        document.querySelector(".total").classList.remove("danger");    
    }
}
calculateBtnElement.addEventListener('click', totalPhoneBill);

