## BRIEF
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### DATI
1. Numero chilometri
2. Età passeggero
3. Percentuale sconto giovani
4. Percentuale sconto anziani

### ESECUZIONE LOGICA
- **Aggiungo evento** al completamento del form
- **Prelevo** i dati forniti dall'utente
- **Definisco funzione** per calcolo del biglietto treno:
    Moltiplico i chilometri da percorrere per 0.21
    **SE** l'età del passeggero < 18 
        Applico sconto giovani
    **ALTRIMENTI** età passeggero > 65 
        Applico sconto anziani

