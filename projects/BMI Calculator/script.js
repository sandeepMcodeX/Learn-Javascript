const userHeight = document.querySelector('#height');
const userWeight = document.querySelector('#weight');
const form = document.querySelector('form');
const result = document.querySelector('.result');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseFloat(userHeight.value.trim());
  const weight = parseFloat(userWeight.value.trim());

  if (!height || !weight) {
    result.innerHTML = `Height and Weight required`;
    return;
  }
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    result.innerHTML = `Please enter valid data`;
    return;
  }

  if (height < 50 || height > 300 || weight < 10 || weight > 500) {
    result.textContent =
      'Enter realistic Height (50–300 cm) and Weight (10–500 kg)';
    return;
  }
  const bmiCalculate = parseFloat((weight / (height / 100) ** 2).toFixed(2));
  if (bmiCalculate < 18.6) {
    result.innerHTML = `<span>${bmiCalculate} UnderWeight</span>`;
  } else if (bmiCalculate >= 18.6 && bmiCalculate <= 24.9) {
    result.innerHTML = `<span>${bmiCalculate} Normal Weight</span>`;
  } else {
    result.innerHTML = `<span>${bmiCalculate} OverWeight</span>`;
  }
});
