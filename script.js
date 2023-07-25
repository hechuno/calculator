//Operations

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

function findOperator(screen){
    let operator;
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

    return operator;
}

function findIndexOperator(screen){
    const operator = findOperator(screen);
    const indexOperator = screen.textContent.indexOf(operator);

    return indexOperator;
}

function countDecimals(screen){
    let num1Dec = 0;
    let num2Dec = 0;
    num1 = getNums(screen)[0];
    num2 = getNums(screen)[1];
    if(num1.toString().includes('.')){
    num1Dec = getNums(screen)[0].toString().split(".")[1].length;
    }
    if(num2.toString().includes('.')){
        num2Dec = getNums(screen)[1].toString().split(".")[1].length;
    }

    return [num1Dec, num2Dec];
}

function getNums(screen){
    const indexOperator = findIndexOperator(screen);
    num1 = parseFloat(screen.textContent.slice(0, indexOperator));
    num2 = parseFloat(screen.textContent.slice(indexOperator +1));

    return [num1, num2];
}

function toMath(screen){
    const operator = findOperator(screen);
    num1 = getNums(screen)[0];
    num2 = getNums(screen)[1];

    num1Dec = countDecimals(screen)[0];
    num2Dec = countDecimals(screen)[1];
    
    let result = operate(num1, num2, operator)

    if(num1Dec>3 || num2Dec>3){
        result=result.toFixed(4);
    }

    screenLast.textContent=(screen.textContent+=result);
    screen.textContent=result;
    calculator.classList.toggle("operator");
}

//DOM

const calculator = document.getElementById('calculator');
const buttons = document.getElementById('buttons');
const screens = document.getElementById('screens');
const optionButtons = document.getElementById('optionButtons');

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
calculator.appendChild(optionButtons);
optionButtons.appendChild(buttonClear).textContent="Clear";
optionButtons.appendChild(buttonDelete).textContent="Delete";
calculator.appendChild(screens);
screens.appendChild(screenLast);
screens.appendChild(screen);
calculator.appendChild(buttons);
buttons.appendChild(button1).textContent="1";
buttons.appendChild(button2).textContent="2";
buttons.appendChild(button3).textContent="3";
buttons.appendChild(button4).textContent="4";
buttons.appendChild(button5).textContent="5";
buttons.appendChild(button6).textContent="6";
buttons.appendChild(button7).textContent="7";
buttons.appendChild(button8).textContent="8";
buttons.appendChild(button9).textContent="9";
buttons.appendChild(button0).textContent="0";
buttons.appendChild(buttonDot).textContent=".";

buttons.appendChild(buttonEqual).textContent="=";
buttons.appendChild(buttonPlus).textContent="+";
buttons.appendChild(buttonMinus).textContent="-"
buttons.appendChild(buttonMultiply).textContent="*"
buttons.appendChild(buttonDivide).textContent="/"

buttonClear.classList.add("clrDelButtons");
buttonDelete.classList.add("clrDelButtons");
calculator.classList.add("operator");

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
    const indexOperator = findIndexOperator(screen);
    console.log(indexOperator);
    if(screen.textContent.slice(0, indexOperator).includes(".") && screen.textContent.slice(indexOperator+1).includes(".")){
        return;
    }
    if(screen.textContent.slice(indexOperator+1).includes(".") && indexOperator!=-1){
        return;
    }
    if(screen.textContent.includes(".") && indexOperator===-1){
        return;
    }
    screen.textContent+=".";
})
buttonPlus.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(calculator.classList.contains("operator")){
    screen.textContent+="+";
    calculator.classList.toggle("operator");
    } else {
        calculate(screen);
        screen.textContent+="+";
        calculator.classList.toggle("operator");
}
})

buttonMinus.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(calculator.classList.contains("operator")){
        screen.textContent+="-";
        calculator.classList.toggle("operator");
        } else{
            calculate(screen);
            screen.textContent+="-";
            calculator.classList.toggle("operator");
    }
})

buttonMultiply.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(calculator.classList.contains("operator")){
        screen.textContent+="*";
        calculator.classList.toggle("operator");
        } else{
            calculate(screen);
            screen.textContent+="*";
            calculator.classList.toggle("operator");
    }
})

buttonDivide.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        return;
    }
    if(calculator.classList.contains("operator")){
        screen.textContent+="/";
        calculator.classList.toggle("operator");
        } else{
            calculate(screen);
            screen.textContent+="/";
            calculator.classList.toggle("operator");
    }
})

buttonEqual.addEventListener("click", (event)=>{
    if(calculator.classList.contains("operator")){
        return;
    }
    calculate(screen);
})

buttonClear.addEventListener("click", (event)=>{
    calculator.classList.add("operator");
    num1=null;
    num2=null;
    operator=null;
    screenLast.textContent="";
    screen.textContent="";
})

buttonDelete.addEventListener("click", (event)=>{
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        calculator.classList.remove("operator");
    }
    screen.textContent=screen.textContent.slice(0, -1);
})