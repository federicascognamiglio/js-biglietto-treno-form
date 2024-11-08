// DATI
const ageInput = document.getElementById("age");
const kmInput = document.getElementById("km");
const nameInput = document.getElementById("username");
const formElem = document.getElementById("ticket-form");
const nameElem = document.getElementById("complete-name");
const offerTypeElem = document.getElementById("offer-type");
const carriageElem = document.getElementById("carriage");
const cpCodeElem = document.getElementById("cp-code");
const priceElem = document.getElementById("price");
const pricePerKm = 0.21;
const discountYoung = 20;
const discountElderly = 40;

// ESECUZIONE
formElem.addEventListener("submit", function(event){
    event.preventDefault();
    const passengerAge = parseInt(ageInput.value.trim());
    const passengerKm = parseInt(kmInput.value.trim());
    const passengerName = nameInput.value.trim();
    const finalPrice = ticketPrice(passengerAge, passengerKm, pricePerKm, discountYoung, discountElderly);
    nameElem.innerHTML = passengerName;
    offerTypeElem.innerHTML = typeOfOffer(passengerAge);
    carriageElem.innerHTML = randomNum(1, 10);
    cpCodeElem.innerHTML = randomNum(1000, 3000);
    priceElem.innerHTML = `${finalPrice} €`
    formElem.reset();
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

/**
 * Funzione che mi dice il tipo di offerta
 * @param {number} age
 * @returns {string}
 */

function typeOfOffer (age) {
    let offerType = "Biglietto Standard";
    if (age < 18) {
        offerType = "Sconto Giovani";
    } else if (age > 65) {
        offerType = "Sconto Anziani";
    }
    return offerType;
}


// FUNZIONI
/** Funzione che genera un numero random
 * @param {number} min
 * @param {number} max
 * @returns {number}
*/

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min) + min));
}