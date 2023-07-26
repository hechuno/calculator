//Calculation Functions

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

//Add Text Functions
function one(){
    screen.textContent+=1;
} 

function two(){
    screen.textContent+=2;
} 

function three(){
    screen.textContent+=3;
} 

function four(){
    screen.textContent+=4;
} 

function five(){
    screen.textContent+=5;
} 

function six(){
    screen.textContent+=6;
} 

function seven(){
    screen.textContent+=7;
} 

function eight(){
    screen.textContent+=8;
} 

function nine(){
    screen.textContent+=9;
}

function zero(){
    screen.textContent+=0;
} 

function dot(){
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
}

function plus(){
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
}

function minus(){
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
}

function multiply(){
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
}

function divide(){
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
}

function equal(){
    if(calculator.classList.contains("operator")){
        return;
    }
    calculate(screen);
}

function backspace(){
    if(isOperator(screen.textContent.charAt(screen.textContent.length-1))){
        calculator.classList.remove("operator");
    }
    screen.textContent=screen.textContent.slice(0, -1);
}

document.addEventListener("keydown", function(event){
    switch (event.key) {
        case '1':
            one();
            break;
        case '2':
            two();
            break;
        case '3':
            three();
            break;
        case '4':
            four();
            break;
        case '5':
            five();
            break;
        case '6':
            six();
            break;
        case '7':
            seven();
            break;
        case '8':
            eight();
            break;
        case '9':
            nine();
            break;
        case '0':
            zero();
            break;
        case '.':
            dot();
            break;
        case '+':
            plus();
            break;
        case '-':
            minus();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        case '=':
            equal();
            break;
        case 'Enter':
            event.preventDefault();
            equal();
            break;
        case 'Backspace':
            backspace();
            break;
        case 'Delete':
            backspace();
            break;
        default:
            return;
    }
})


button1.addEventListener("click", one);
button2.addEventListener("click", two);
button3.addEventListener("click", three);
button4.addEventListener("click", four);
button5.addEventListener("click", five);
button6.addEventListener("click", six);
button7.addEventListener("click", seven);
button8.addEventListener("click", eight);
button9.addEventListener("click", nine);
button0.addEventListener("click", zero);
buttonDot.addEventListener("click", dot);
buttonPlus.addEventListener("click", plus);
buttonMinus.addEventListener("click", minus);
buttonMultiply.addEventListener("click", multiply);
buttonDivide.addEventListener("click", divide);
buttonEqual.addEventListener("click", equal);
buttonClear.addEventListener("click", (event)=>{
    calculator.classList.add("operator");
    num1=null;
    num2=null;
    operator=null;
    screenLast.textContent="";
    screen.textContent="";
})
buttonDelete.addEventListener("click", backspace);