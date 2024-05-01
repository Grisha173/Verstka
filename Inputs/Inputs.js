const inputSelector = {
    first: 'first-number',
    second: 'second-number',
};
const resultSelector = 'container-result';
const buttonSelector = '.button';


let resultField, firstNumber, secondNumber, button;



const multiplicate = () => {
    resultField = document.querySelector(resultSelector);
    resultField = Number(firstNumber[0].value) * Number(secondNumber[0].value);
    console.log('RESULTFIELD', resultField);
    document.getElementsByClassName(resultSelector)[0].innerHTML = resultField;
}

const result = () => {
    firstNumber = document.getElementsByClassName(inputSelector.first);
    secondNumber = document.getElementsByClassName(inputSelector.second);
    button = document.querySelector(buttonSelector);
    button.addEventListener('click', multiplicate);
};


window.onload = () => {
    result();
};