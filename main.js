//Global Variables
const numbers = document.querySelectorAll('.numbers');
const screen = document.querySelector('#screen')
const zero = document.querySelector('.zero')
const del = document.querySelector('.del')
const operators = document.querySelectorAll('.operators')
const equal = document.querySelector('.equal')

// input numbers on the butons
for (i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = parseInt(i + 1)
   
}
zero.innerHTML = parseInt(0)

let operatorsArray = Array.from(operators)
console.log(operatorsArray)
console.log(numbers)
// Display Clicked number on the screen
const cal = []
numbers.forEach (function (number) {
    number.addEventListener('click', addNum)
    function addNum() {
    cal.push(number.innerHTML)
    screen.innerHTML = cal.join(''); // remove commas from array
   }
}) 


//Delete last input 
del.addEventListener('click', () => {
    cal.pop();
    screen.innerHTML = cal;
})


// Display Sign when clicked
operatorsArray.forEach (function (operator) {
    operator.addEventListener('click', addOp)
    function addOp() {
       
        if (cal[cal.length - 1] != operator.innerHTML) {
            cal.push(operator.innerHTML)
            screen.innerHTML = cal.join(''); // remove commas from array
        } else {
            cal.pop()
            cal.push(operator.innerHTML)
            screen.innerHTML = cal.join(''); // remove commas from array
        }
    }
})

/*equal.addEventListener('click', operate);
function operate() {
    if (cal.operators = operators[0]) {
        
    }  
}*/ 
const arr = [5,4, 6, 'how'];
console.log(arr)
window.addEventListener ('click', p)
function p() {
 

if (arr[arr.length - 1] != "how") {
    arr.pop()
    arr.push(5)
    console.log(arr)
}    
} 
