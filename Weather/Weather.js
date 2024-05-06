let button, weatherField;


const key = 'b5d1f8c079494ba1899160247240605';
const resultSelector = 'weather';
const buttonSelector = 'button';
const inputSelector = 'input';


const writeValue = (json) => {
    const temp = json.current.temp_c;
    console.log('JSON', temp);
    document.getElementsByClassName(resultSelector)[0].innerHTML = `Температура: ${json.current.temp_c} ${json.current.condition.text}`;
};


const click = () => {
    weatherField = document.querySelector(inputSelector).value;
    console.log('WEATHERFIELD', weatherField);
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&lang=ru&q=${weatherField}`)
    .then(response => response.json())
    .then(writeValue)
    .catch(err => alert(err));
};


const result = () => {
    button = document.querySelector(buttonSelector);
    button.addEventListener('click', click);
};


window.onload = () => {
    result();
};