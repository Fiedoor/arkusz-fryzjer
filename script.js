var a = document.getElementsByClassName('in')
document.getElementById('b').addEventListener('click', licz)
function licz() {
  for (var i = 0; i < a.length; i++) {
    console.log('w')
    if (a[i].checked) {
      document.getElementById('wynik').innerText = 'Cena strzyżenia: ' + a[i].value
      break
    }
  }
}
