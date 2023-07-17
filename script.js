//Operations

let num1;
let num2;
let operator;

function addition(num1, num2){
    return num1+num2;
}

function substraction(num1, num2){
    return num1-num2;
}

function multiplication(num1, num2){
    return num1*num2;
}

function division(num1, num2){
    return num1/num2;
}

function operate(num1, num2, operator){
    if(operator === '+'){
        return addition(num1, num2);
    }
    if(operator === '-'){
        return substraction(num1, num2);
    }
    if(operator === '*'){
        return multiplication(num1, num2);
    }
    if(operator === '/'){
        return division(num1, num2);
    }
}

function toMath(screen){
    if(screen.textContent.includes('+')){
        operator='+'
    } 
    if(screen.textContent.includes('-')){
        operator='-'
    } 
    if(screen.textContent.includes('*')){
        operator='*'
    } 
    if(screen.textContent.includes('/')){
        operator='/'
    } 

    num1 = parseFloat(screen.textContent.slice(operator)[0]);
    num2 = parseFloat(screen.textContent.slice(operator)[2]);
    screen.textContent+=operate(num1, num2, operator);
}

//DOM

const calculator = document.getElementById('calculator');

//Created elements
const screen = document.createElement('div');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');
const button5 = document.createElement('button');
const button6 = document.createElement('button');
const button7 = document.createElement('button');
const button8 = document.createElement('button');
const button9 = document.createElement('button');
const button0 = document.createElement('button');
const buttonPlus = document.createElement('button');
const buttonEqual = document.createElement('button');

//Appending elements

calculator.appendChild(screen);
calculator.appendChild(button1).textContent="1";
calculator.appendChild(button2).textContent="2";
calculator.appendChild(button3).textContent="3";
calculator.appendChild(button4).textContent="4";
calculator.appendChild(button5).textContent="5";
calculator.appendChild(button6).textContent="6";
calculator.appendChild(button7).textContent="7";
calculator.appendChild(button8).textContent="8";
calculator.appendChild(button9).textContent="9";
calculator.appendChild(button0).textContent="0";

calculator.appendChild(buttonPlus).textContent="+";
calculator.appendChild(buttonEqual).textContent="=";


//Manipulating elements

screen.textContent = "";
button1.addEventListener("click", (event)=>{
    screen.textContent+=1;
})
button2.addEventListener("click", (event)=>{
    screen.textContent+=2;
})
button3.addEventListener("click", (event)=>{
    screen.textContent+=3;
})
buttonPlus.addEventListener("click", (event)=>{
    screen.textContent+="+";
})
buttonEqual.addEventListener("click", (event)=>{
    screen.textContent+="=";
    toMath(screen);
})






