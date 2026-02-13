
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

let lengthEl = document.getElementById("Length-el");
let volumeEl = document.getElementById("Volume-el");
let massEl = document.getElementById("Mass-el");
let inputEl = document.getElementById("input");
const btnConvert = document.querySelector(".convert-btn");

btnConvert.addEventListener("click", function() {
let baseValue = Number(inputEl.value)

if (isNaN(baseValue)) {
    alert("Please enter a valid number");
    return; 
}

    const metersToFeet = (baseValue * meterToFeet).toFixed(3);
    const feetToMeters = (baseValue / meterToFeet).toFixed(3);

    const litersToGallons = (baseValue * literToGallon).toFixed(3);
    const gallonsToLiters = (baseValue / literToGallon).toFixed(3);

    const kilosToPounds = (baseValue * kilogramToPound).toFixed(3);
    const poundsToKilos = (baseValue / kilogramToPound).toFixed(3);

    lengthEl.textContent = `${baseValue} meters = ${metersToFeet} feet | ${baseValue} feet = ${feetToMeters} meters`;

    volumeEl.textContent = `${baseValue} liters  = ${litersToGallons} gallons | ${baseValue} gallons = ${gallonsToLiters} liters`;

    massEl.textContent = `${baseValue} kilos  = ${kilosToPounds} pounds | ${baseValue} pounds = ${poundsToKilos} kilos`;

});
