//Global Variables
const numbers = document.querySelectorAll('.numbers');
const screen = document.querySelector('#screen')
const zero = document.querySelector('.zero')
const deleteInput = document.querySelector('.delete')
const operators = document.querySelectorAll('.operators')
const equal = document.querySelector('.equal')


// input numbers on the butons
for (i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = parseInt(i + 1)
   
}
zero.innerHTML = parseInt(0)


// Display Clicked number on the screen
const currentScreenInput = []
numbers.forEach (function (number) {
    number.addEventListener('click', addNum)
    function addNum() {
    currentScreenInput.push(number.innerHTML)
    screen.innerHTML = currentScreenInput.join(''); // remove commas from array
   }
}) 


//Delete last input 
deleteInput.addEventListener('click', () => {
    currentScreenInput.pop();
    screen.innerHTML = currentScreenInput.join("");
})


// Display Sign when clicked
let operatorsArray = Array.from(operators)
operatorsArray.forEach (function (operator) {
    operator.addEventListener('click', addOp)
    function addOp() {
       
        if (currentScreenInput[currentScreenInput.length - 1] != operator.innerHTML) {
            currentScreenInput.push(operator.innerHTML)
            screen.innerHTML = currentScreenInput.join(''); // remove commas from array
        } else {
            currentScreenInput.pop()
            currentScreenInput.push(operator.innerHTML)
            screen.innerHTML = currentScreenInput.join(''); // remove commas from array
        }
    }
})

