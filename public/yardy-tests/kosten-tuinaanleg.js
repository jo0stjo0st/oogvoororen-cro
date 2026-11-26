const model = document.querySelector('#tuinmodel');
const calculator = document.querySelector('#model-rekenlink');

function showModelCalculator() {
  const selected = model.selectedOptions[0];
  calculator.href = selected.value;
  calculator.textContent = 'Open rekentool van ' + selected.textContent.split(' · ')[0];
}

model.form.addEventListener('submit', (event) => event.preventDefault());
model.addEventListener('change', showModelCalculator);
showModelCalculator();
