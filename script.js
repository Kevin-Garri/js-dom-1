const bottone = document.getElementById('button')
const lightOff = document.getElementById('spenta')
const lightOn = document.getElementById('accesa')

bottone.addEventListener('click', () => {
  lightOff.classList.toggle('active')
  lightOn.classList.toggle('active')
  bottone.innerHTML = lightOff.classList.contains('active') ? 'Spegni' : 'Accendi';
});