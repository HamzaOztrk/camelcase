let input = document.getElementById('input');
let button = document.getElementById('button');
let sonuç = document.getElementById('sonuç');


const converInput = () => {
    let value = input.value;
    let camelCase;
    if(value.includes(' ')) {
        let newValue = value.split(' ');
        newValue = newValue.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join('')
        newValue = newValue[0].toLowerCase() + newValue.slice(1)
        camelCase = newValue
    } else if(value.includes('-')) {
        let newValue = value.split('-');
        newValue = newValue.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join('')
        newValue = newValue[0].toLowerCase() + newValue.slice(1)
        camelCase = newValue
    } else {
        camelCase = value
    }
    sonuç.innerText = camelCase
}











button.addEventListener("click", converInput)