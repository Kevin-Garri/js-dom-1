//il metodo toggle alterna la visibilità e invisibilità di un oggetto.
//addEventListener associa un gestore di eventi a un elemento.
//getelement viene utilizzato per leggere o modificare elementi nel html, restituisce un elemento con un valore specificato, restituisce null se l'elemento non esiste,
//innerhtml consente di ottenere una stringa contenente l'HTML dentro l'elemento. 
//contains controlla se una stringa contiene una sequenza di caratteri restituisce true o false controlla se lightoff ha classe active con ternario diventa spegni altrimenti accendi
const bottone = document.getElementById('button')
const lightOff = document.getElementById('spenta')
const lightOn = document.getElementById('accesa')

bottone.addEventListener('click', () => {
  lightOff.classList.toggle('active')
  lightOn.classList.toggle('active')
  bottone.innerHTML = lightOff.classList.contains('active') ? 'Spegni' : 'Accendi';
});

console.log('Lampadina accesa:', lightOn.classList.contains('active'));
console.log('Lampadina spenta:', lightOff.classList.contains('active'));
