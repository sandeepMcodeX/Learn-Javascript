const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  //prevent form
  e.preventDefault();
  const height = parseFloat(document.querySelector('#height').value.trim());
  const weight = parseFloat(document.querySelector('#weight').value.trim());
  const result = document.querySelector('.result');

  // Empty input check
  if (!height || !weight) {
    result.textContent = ' height and weight are required';
    return;
  }
  //  Check if input is a number or Check if number is positive
  if (isNaN(height) || isNaN(weight) ||height <= 0 || weight <= 0) {
    result.textContent = 'Please enter valid numbers.';
    return;
  }

  if (height < 50 || height > 300 ||weight < 10 || weight > 500 ) {
    result.textContent = 'Enter realistic height (50–300 cm) and weight (10–500 kg)';
    return;
  }
  const bmiCalculate = (weight / (height / 100) ** 2).toFixed(2);
  // show the result
  if (bmiCalculate < 18.6) {
    result.innerHTML = `<span>${bmiCalculate} Under weight</span>`;
  } else if (bmiCalculate >= 18.6 && bmiCalculate <= 24.9) {
    result.innerHTML = `<span>${bmiCalculate} Normal</span>`;
  } else {
    result.innerHTML = `<span>${bmiCalculate} Over Weight</span>`;
  }
});

