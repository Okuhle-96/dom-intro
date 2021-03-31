// get a reference to the sms or call radio buttons
// get refences to all the settings fields
var callTotalSettingsElement = document.querySelector(".callTotalSettings");
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
var totalSettingsElement = document.querySelector(".totalSettings");
var buttonPrimaryElement = document.querySelector(".button-primary");
//get a reference to the 'Update settings' button
var callcostSettingElement = document.querySelector(".callcostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
var updateSettingsElement = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var orangeSettings = 0;
var redSettings = 0;
// create a variables that will keep track of all three totals.
var callTotals = 0;
var smsTotals = 0;
var entireTotal = 0;

var callNum = 0;
var smsNum = 0;
//add an event listener for when the 'Update settings' button is pressed
function updateSettings(){
    callNum = callcostSettingElement.value;
    smsNum = smsTotalSettingsElement.value;
    orangeSettings = warningLevelSettingElement.value;
    redSettings = criticalLevelSettingElement.value;

    if (entireTotal < orangeSettings) {
        document.querySelector(".totalSettings").classList.remove("warning");
        document.querySelector(".totalSettings").classList.remove("danger");
    }else if (entireTotal >= orangeSettings){
        document.querySelector(".totalSettings").classList.add("warning");
        document.querySelector(".totalSettings").classList.remove("danger"); 
    }if (totalSettingsElement >= redSettings) {
        document.querySelector(".totalSettings").classList.remove("warning");
        document.querySelector(".totalSettings").classList.add("danger");  
    }
}
//add an event listener for when the add button is pressed
updateSettingsElement.addEventListener('click', updateSettings);

function billSettings() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedRadioBtn) {

        if (checkedRadioBtn.value === 'call') {
            if ((entireTotal + parseFloat(callNum)) <= redSettings ) {

              callTotals += parseFloat(callNum);
              entireTotal += parseFloat(callNum)
            
            }

        } else if (checkedRadioBtn.value === 'sms') {
            if ((entireTotal + parseFloat(smsNum)) <= redSettings ) {
            smsTotals += parseFloat(smsNum);
            entireTotal += parseFloat(smsNum)
            }

        }

    }

    

        if (entireTotal < orangeSettings) {
            document.querySelector(".totalSettingss").classList.remove("warning");
            document.querySelector(".totalSettingss").classList.remove("danger");
        }
        if (entireTotal >= orangeSettings && entireTotal < redSettings) {
            document.querySelector(".totalSettingss").classList.remove("danger");
            document.querySelector(".totalSettingss").classList.add("warning");
        } else if (entireTotal >= redSettings) {
            document.querySelector(".totalSettingss").classList.remove("warning");
            document.querySelector(".totalSettingss").classList.add("danger");
        }

        callTotalSettingsElement.innerHTML = callTotals.toFixed(2);
        smsTotalSettingsElement.innerHTML = smsTotals.toFixed(2);
        totalSettingsElement.innerHTML = entireTotal.toFixed(2);

}
buttonPrimaryElement.addEventListener('click', billSettings);