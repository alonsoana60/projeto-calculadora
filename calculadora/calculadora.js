function limparDisplay (){
    document.querySelector('.display').innerText = '0';
}

function limparUltimo (){
const display = document.querySelector('.display');
display.innerText = display.innerText.slice (0, -1);
}

function numeroDisplay (value){
    const display = document.querySelector('.display');
    if (display.innerText === '0' && value !== '.'){
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function result(){
    const display = document.querySelector('.display');
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        console.log('error');
        display.innerText = 'Error';
    }
}