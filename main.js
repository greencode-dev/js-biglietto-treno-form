// Get form and input elements
const calculateButton = document.getElementById('calculate');
const resetButton = document.getElementById('reset');
const passengerNameInput = document.getElementById('passengerName');
const kilometersInput = document.getElementById('kilometers');
const ageSelect = document.getElementById('age');

// Get ticket output elements
const ticketSection = document.getElementById('ticket-section');
const outputName = document.getElementById('output-name');
const outputOffer = document.getElementById('output-offer');
const outputCarriage = document.getElementById('output-carriage');
const outputCpCode = document.getElementById('output-cp-code');
const outputPrice = document.getElementById('output-price');

// Base price per km
const pricePerKm = 0.21;

calculateButton.addEventListener('click', function () {
  // Get input values
  const passengerName = passengerNameInput.value;
  const kilometers = parseFloat(kilometersInput.value);
  const ageGroup = ageSelect.value;

  // --- Validation ---
  if (!passengerName.trim() || isNaN(kilometers) || kilometers <= 0) {
    alert('Per favore, compila tutti i campi correttamente. Assicurati che i chilometri siano un numero positivo.');
    return;
  }

  // --- Calculation ---
  let basePrice = kilometers * pricePerKm;
  let finalPrice = basePrice;
  let offerType = 'Biglietto Standard';

  if (ageGroup === 'minor') {
    finalPrice *= 0.8; // 20% discount
    offerType = 'Sconto Minorenni';
  } else if (ageGroup === 'senior') {
    finalPrice *= 0.6; // 40% discount
    offerType = 'Sconto Over 65';
  }

  // --- Generate random ticket data ---
  const carriage = Math.floor(Math.random() * 10) + 1;
  const cpCode = Math.floor(Math.random() * 10000) + 90000;

  // --- Log ticket details to console ---
  console.log('Dettagli Biglietto:');
  console.log('Nome Passeggero:', passengerName);
  console.log('Offerta:', offerType);
  console.log('Carrozza:', carriage);
  console.log('Codice CP:', cpCode);
  console.log('Prezzo Finale:', `€ ${finalPrice.toFixed(2)}`);

  // --- Display the ticket ---
  outputName.innerText = passengerName;
  outputOffer.innerText = offerType;
  outputCarriage.innerText = carriage;
  outputCpCode.innerText = cpCode;
  outputPrice.innerText = `€ ${finalPrice.toFixed(2)}`;

  // Make the ticket section visible
  ticketSection.classList.remove('hidden');
});

resetButton.addEventListener('click', function () {
  // Hide the ticket section when form is reset
  ticketSection.classList.add('hidden');

  // The type="reset" on the button handles clearing the inputs
});
