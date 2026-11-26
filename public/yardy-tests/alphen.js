const enquiry = document.querySelector('#tuinaanvraag');

enquiry.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(enquiry);
  const subject = 'Tuinaanvraag — ' + fields.get('plaats');
  const body = [
    'Beste Yardy,',
    '',
    'Ik wil graag meer weten over het ontwerpen en aanleggen van mijn tuin.',
    '',
    'Naam: ' + fields.get('voornaam') + ' ' + fields.get('achternaam'),
    'E-mailadres: ' + fields.get('email'),
    'Telefoon: ' + fields.get('telefoon'),
    'Plaats: ' + fields.get('plaats'),
  ].join('\r\n');
  window.location.href = 'mailto:info@yardy.nl?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);
});

enquiry.querySelector('button[type="submit"]').disabled = false;
