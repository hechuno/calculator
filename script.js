//Operations

let num1;
let num2;
let operator;
let nbOperator = 0;

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
    if(num2===0){
        screenLast.textContent="you stupid. can't divide by 0";
        screen.textContent="clear to restart";
        throw new Error("Attempt to divide by 0. Clear to restart");
    } 
        return num1/num2;

    
}

function operate(num1, num2, operator){
    if(operator === '+'){
        num1 = addition(num1, num2);
        return num1;
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

function calculate(screen){
    screen.textContent+="=";
    toMath(screen);
}

function isOperator(operator){
    if(operator==="+"||operator==="-"||operator==="*"||operator==="/"){
        return true;
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

    const indexOperator = screen.textContent.indexOf(operator);
    num1 = parseFloat(screen.textContent.slice(0, indexOperator));
    num2 = parseFloat(screen.textContent.slice(indexOperator +1));
    const result = operate(num1, num2, operator).toFixed(4);
    screenLast.textContent=(screen.textContent+=result);
    screen.textContent=result;
    nbOperator=0;
}

//DOM

const calculator = document.getElementById('calculator');

//Created elements
const screen = document.createElement('div');
const screenLast = document.createElement('div');
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
const buttonDot = document.createElement('button');
const buttonPlus = document.createElement('button');
const buttonMinus = document.createElement('button');
const buttonMultiply = document.createElement('button');
const buttonDivide = document.createElement('button');
const buttonEqual = document.createElement('button');
const buttonClear = document.createElement('button');
const buttonDelete = document.createElement('button');

//Appending elements
calculator.appendChild(buttonClear).textContent="Clear";
calculator.appendChild(buttonDelete).textContent="Delete";
calculator.appendChild(screenLast).classList.add("screens");
calculator.appendChild(screen).classList.add("screens");
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
calculator.appendChild(buttonDot).textContent=".";

calculator.appendChild(buttonPlus).textContent="+";
calculator.appendChild(buttonMinus).textContent="-"
calculator.appendChild(buttonMultiply).textContent="*"
calculator.appendChild(buttonDivide).textContent="/"
calculator.appendChild(buttonEqual).textContent="=";


//Manipulating elements
button1.addEventListener("click", (event)=>{
    screen.textContent+=1;
})
button2.addEventListener("click", (event)=>{
    screen.textContent+=2;
})
button3.addEventListener("click", (event)=>{
    screen.textContent+=3;
})
button4.addEventListener("click", (event)=>{
    screen.textContent+=4;
})
button5.addEventListener("click", (event)=>{
    screen.textContent+=5;
})
button6.addEventListener("click", (event)=>{
    screen.textContent+=6;
})
button7.addEventListener("click", (event)=>{
    screen.textContent+=7;
})
button8.addEventListener("click", (event)=>{
    screen.textContent+=8;
})
button9.addEventListener("click", (event)=>{
    screen.textContent+=9;
})
button0.addEventListener("click", (event)=>{
    screen.textContent+=0;
})
buttonDot.addEventListener("click", (event)=>{
    if(screen.textContent.includes(".")){
        return;
    }
    screen.textContent+=".";
})
buttonPlus.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(nbOperator<1){
    screen.textContent+="+";
    nbOperator++;
    } else {
        calculate(screen);
        screen.textContent+="+";
        nbOperator++;
}
})

buttonMinus.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(nbOperator<1){
        screen.textContent+="-";
        nbOperator++;
        } else{
            calculate(screen);
            screen.textContent+="-";
            nbOperator++;
    }
})

buttonMultiply.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(nbOperator<1){
        screen.textContent+="*";
        nbOperator++;
        } else{
            calculate(screen);
            screen.textContent+="*";
            nbOperator++;
    }
})

buttonDivide.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(nbOperator<1){
        screen.textContent+="/";
        nbOperator++;
        } else{
            calculate(screen);
            screen.textContent+="/";
            nbOperator++;
    }
})

buttonEqual.addEventListener("click", (event)=>{
    if(nbOperator===0){
        return;
    }
    calculate(screen);
})

buttonClear.addEventListener("click", (event)=>{
    nbOperator=0;
    num1=null;
    num2=null;
    operator=null;
    screenLast.textContent="";
    screen.textContent="";
})

buttonDelete.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        nbOperator--;
    }
    screen.textContent=screen.textContent.slice(0, -1);
})