// DATI
const ageInput = document.getElementById("age");
const kmInput = document.getElementById("km");
const formElem = document.getElementById("ticket-form");
const pricePerKm = 0.21;
const discountYoung = 20;
const discountElderly = 40;

// ESECUZIONE
formElem.addEventListener("submit", function(event){
    event.preventDefault();
    const passengerAge = parseInt(ageInput.value.trim());
    const passengerKm = parseInt(kmInput.value.trim());
    const finalPrice = ticketPrice(passengerAge, passengerKm, pricePerKm, discountYoung, discountElderly);
    console.log(finalPrice);
})

// FUNZIONI
/**
 * Funzione che calcola il prezzo di un biglietto
 * @param {number} age
 * @param {number} km
 * @param {number} costKm
 * @param {number} dicount1
 * @param {number} discount2
 * @returns {number}
 */

function ticketPrice (age, km, costKm, discount1, discount2) {
    let ticketPrice = km * costKm;
    if (age < 18) {
        const discountCalc1 = ticketPrice / 100 * discount1;
        ticketPrice -= discountCalc1;
    } else if (age > 65) {
        const discountCalc2 = ticketPrice / 100 * discount2;
        ticketPrice -= discountCalc2;
    }
    return ticketPrice.toFixed(2);
}