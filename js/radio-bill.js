var radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");

var calls = [];
var smses = [];

function radioBillWidget() {
    var check = document.querySelector("input[name='billItemType']:checked");

    if (check) {
        if (check.value === 'call') {
            calls.push(check.value);
        } else if (check.value === 'sms') {
            smses.push(check.value);
        }
    }

    var allCalls = calls.length;
    var allSmses = smses.length;

    var callTotal = allCalls * 2.75;
    callTotalTwoElement.innerHTML = callTotal.toFixed(2);

    var smsTotal = allSmses * 0.75;
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    
    var total = allCalls * 2.75 + allSmses * 0.75;
    var entireRadioBill = total.toFixed(2);

    totalTwoElement.innerHTML = entireRadioBill;
    
    if (entireRadioBill >= 30 && entireRadioBill < 50) {
        document.querySelector(".totalRadio").classList.add("warning");
        }else if (entireRadioBill >= 30) {
            document.querySelector(".totalRadio").classList.remove("warning");
            document.querySelector(".totalRadio").classList.add("danger");
        }
}
radioBillAddBtnElement.addEventListener('click', radioBillWidget);