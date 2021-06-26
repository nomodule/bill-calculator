const $oldMainReading = document.querySelector("#oldMainReading");
const $newMainReading = document.querySelector("#newMainReading");
const $oldReading = document.querySelector("#oldReading");
const $newReading = document.querySelector("#newReading");
const $totalBill = document.querySelector("#totalBill");
const $energyCharges = document.querySelector("#energyCharges");
const $extraChargesDivisor = document.querySelector("#extraChargesDivisor");

const $calculateButton = document.querySelector("#calculate");

$calculateButton.addEventListener("click", (e) => {
    e.preventDefault();

    // get per unit charges
    const totalMainUnitConsumed = $newMainReading.value - $oldMainReading.value;
    const perUnitCharges = ($energyCharges.value / totalMainUnitConsumed).toFixed(2);

    // calculate current user energey charges
    const totalUnitConsumed = $newReading.value - $oldReading.value;
    const onlyEnergyCharges = totalUnitConsumed * perUnitCharges;

    // calculate extra charges and merge it in energey charges
    const extraCharges = ($totalBill.value - $energyCharges.value) / $extraChargesDivisor.value;
    const billToPay = Math.round(onlyEnergyCharges + extraCharges);

    if (isNaN(billToPay)) {
        alert("something went wrong!");
        return;
    }

    alert("Bill to pay : " + billToPay);
    console.log(`
        Per Unit Charges: ${perUnitCharges}
        Total Unit Consumed: ${totalUnitConsumed}
        Extra Charges: ${extraCharges}
    `);
});
