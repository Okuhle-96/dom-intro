var callTotalSettingsElement = document.querySelector(".callTotalSettings");
var smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
var totalSettingsElement = document.querySelector(".totalSettings");
var radioButtonElement = document.querySelector(".radioButton");

var callCostSettingElement = document.querySelector(".callCostSetting");
var smsCostSettingElement = document.querySelector(".smsCostSetting");
var warningLevelSettingElement = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElement = document.querySelector(
  ".criticalLevelSetting"
);
var updateSettingsElement = document.querySelector(".updateSettings");

var callNum = 0;
var smsNum = 0;

var orangeSettings = 0;
var redSettings = 0;

var callTotals = 0;
var smsTotals = 0;
var entireTotal = 0;

function updateSettings() {
  callNum = Number(callCostSettingElement.value);
  smsNum = Number(smsCostSettingElement.value);
  orangeSettings = Number(warningLevelSettingElement.value);
  redSettings = Number(criticalLevelSettingElement.value);
  addClasses()
}

updateSettingsElement.addEventListener("click", updateSettings);

function billSettings() {
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );

  if (checkedRadioBtn) {
    if (entireTotal < redSettings) {
      if (checkedRadioBtn.value === "call") {
        callTotals += callNum;
        entireTotal += callNum;
      } else if (checkedRadioBtn.value === "sms") {
        smsTotals += smsNum;
        entireTotal += smsNum;
      }
    }
  }
  addClasses();
  callTotalSettingsElement.innerHTML = callTotals.toFixed(2);
  smsTotalSettingsElement.innerHTML = smsTotals.toFixed(2);
  totalSettingsElement.innerHTML = entireTotal.toFixed(2);
}

function addClasses() {
  if (entireTotal < orangeSettings) {
    document.querySelector(".set").classList.remove("warning");
    document.querySelector(".set").classList.remove("danger");
  }
  if (entireTotal >= orangeSettings && entireTotal < redSettings) {
    document.querySelector(".set").classList.remove("danger");
    document.querySelector(".set").classList.add("warning");
  } else if (entireTotal >= redSettings) {
    document.querySelector(".set").classList.remove("warning");
    document.querySelector(".set").classList.add("danger");
  }
}



radioButtonElement.addEventListener("click", billSettings);
