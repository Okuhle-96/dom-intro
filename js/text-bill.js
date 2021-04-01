var billTypeTextElement = document.querySelector(".billTypeText"); 
var callTotalOneElement = document.querySelector(".callTotalOne");
var smsTotalOneElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");
var addToBillBtnElement = document.querySelector(".addToBillBtn"); 

var allCalls = [];
var allSmses = [];

function textBillWidget() {
    var input = billTypeTextElement.value;
    var trimIn = input.trim();

    if (trimIn === "call") {
        allCalls.push(trimIn);
    } else if (trimIn === "sms") {
        allSmses.push(trimIn);
    }

    var calls = allCalls.length;
    var smses = allSmses.length;

    var callTotalBill = calls * 2.75;
    callTotalOneElement.innerHTML = callTotalBill.toFixed(2);

  
    var smsTotalBill = smses * 0.75;
    smsTotalOneElement.innerHTML = smsTotalBill.toFixed(2);
    
    var totalBill = calls * 2.75 + smses * 0.75;
    var allBills = totalBill.toFixed(2);
    
    totalOneElement.innerHTML = allBills;
    
    if (allBills >= 30 && allBills < 50) {
        document.querySelector(".totalText").classList.add("warning");
        }else if (allBills >= 50) {
            document.querySelector(".totalText").classList.remove("warning");
            document.querySelector(".totalText").classList.add("danger");
        }
}
addToBillBtnElement.addEventListener('click', textBillWidget);