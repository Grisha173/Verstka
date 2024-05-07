let button, weatherField;


const key = 'b5d1f8c079494ba1899160247240605';
const resultSelector = 'weather';
const buttonSelector = 'button';
const inputSelector = 'input';


const writeValue = (json) => {
    const temp = json.current.temp_c;
    console.log('JSON', temp);
    const container = document.getElementsByClassName(resultSelector)[0];
    container.innerHTML = '';
    const a = document.createElement('div');
    a.innerHTML = `${json.location.localtime}`;
    container.appendChild(a);
    const b = document.createElement('div');
    b.innerHTML = `Температура °C: ${json.current.temp_c}`;
    container.appendChild(b);
    const с = document.createElement('div');
    с.innerHTML = `Ощущается как: ${json.current.feelslike_c}`;
    container.appendChild(с);
    const d = document.createElement('div');
    d.innerHTML = `${json.current.condition.text}`;
    container.appendChild(d);
    const e = document.createElement('div');
    e.innerHTML = `Количество осадков: ${json.current.precip_mm}`;
    container.appendChild(e);
    const f = document.createElement('div');
    f.innerHTML = `Скорость ветра: ${json.current.wind_kph} км/ч`;
    container.appendChild(f);
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