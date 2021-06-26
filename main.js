const $oldMainReading = document.querySelector("#oldMainReading");
const $newMainReading = document.querySelector("#newMainReading");
const $oldReading = document.querySelector("#oldReading");
const $newReading = document.querySelector("#newReading");
const $totalBill = document.querySelector("#totalBill");
const $energyCharges = document.querySelector("#energyCharges");
const $extraChargesDivisor = document.querySelector("#extraChargesDivisor");
const $calculateButton = document.querySelector("#calculate");
const $details = document.querySelector("#details");

$calculateButton.addEventListener("click", (e) => {
    e.preventDefault();

    // get per unit charges
    const totalUnitConsumed = $newMainReading.value - $oldMainReading.value;
    const perUnitCharges = ($energyCharges.value / totalUnitConsumed).toFixed(2);

    // calculate current user energey charges
    const unitConsumed = $newReading.value - $oldReading.value;
    const onlyEnergyCharges = unitConsumed * perUnitCharges;

    // calculate extra charges and merge it in energey charges
    const totalExtraCharges = $totalBill.value - $energyCharges.value; 
    const extraCharges = totalExtraCharges / $extraChargesDivisor.value;
    const billToPay = Math.round(onlyEnergyCharges + extraCharges);

    if (isNaN(billToPay)) {
        alert("something went wrong!");
        return;
    }

    alert("Bill to pay : " + billToPay);

    $details.innerHTML = `
<b>Bill to pay</b>: ${billToPay}
Per Unit Charges: ${perUnitCharges}
Total Unit Consumed: ${totalUnitConsumed}
Total Extra Charges: ${totalExtraCharges}
Unit Consumed: ${unitConsumed}
Extra Charges: ${extraCharges}
`;
});
