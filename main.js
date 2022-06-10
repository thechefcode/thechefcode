const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('#display')
const zero = document.querySelector('.zero')
const del = document.querySelector('.del')
const operators = document.querySelectorAll('.operators')
const equal = document.querySelector('.equal')


for (i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = i + 1
   
}
zero.innerHTML = 0


const cal = []
numbers.forEach (function (number) {
    number.addEventListener('click', addNum)
    function addNum() {
    cal.push(number.innerHTML)
      cal.join(' ')
      console.log(cal)
    display.innerHTML = cal;
  
}
}) 

del.addEventListener('click', () => {
    cal.pop()
    display.innerHTML = cal
    console.log(cal)
})

console.log(operators)
operators.forEach (function (operator) {
    operator.addEventListener('click', addOp)
    function addOp() {
        cal.push(operator.innerHTML)
        cal.join(' ')
        console.log(cal)
      display.innerHTML = cal;
    }
})

