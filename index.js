var test = document.getElementById('price')

var a = function () {
  test.innerText = 'Заказ обрабатывается...'
  
}
var b = function () {
  test.innerText = 'Заказ оформлен'
}
test.onclick = function () {
  setTimeout(a , 400)
  setTimeout(b , 5000)

}
