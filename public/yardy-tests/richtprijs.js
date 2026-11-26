const options = document.querySelector('#tuinopties');
const area = document.querySelector('#oppervlakte');
const lighting = document.querySelector('#verlichting');
const pergola = document.querySelector('#pergola');
const clearance = document.querySelector('#leeghalen');
const price = document.querySelector('#prijsbereik');

const referenceArea = 54;
const quoteTotal = 14063.40;
const vatFactor = 1.21;
const lightingCost = 2275.55 * vatFactor;
const pergolaCost = 1573.94 * vatFactor;
// Tile and paver supply and installation, grouting, and ground shaping.
const areaDependentCost = 4698.30 * vatFactor;
const fixedBaseCost = quoteTotal - lightingCost - pergolaCost - areaDependentCost;
const formatPrice = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

function updatePrice() {
  if (!area.validity.valid) {
    price.textContent = 'Vul 15–250 m² in';
    return;
  }

  const size = area.valueAsNumber;
  const base = fixedBaseCost + areaDependentCost * size / referenceArea;
  const installation = base + (lighting.checked ? lightingCost : 0)
    + (pergola.checked ? pergolaCost : 0);
  const low = installation + (clearance.checked ? 20 * size : 0);
  const high = installation * 1.05 + (clearance.checked ? 35 * size : 0);
  price.textContent = `${formatPrice.format(low)} – ${formatPrice.format(high)}`;
}

options.addEventListener('input', updatePrice);
options.addEventListener('submit', (event) => event.preventDefault());
updatePrice();
