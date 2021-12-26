let screen = document.getElementById('screen');
let button = document.querySelectorAll('.buttons')

let clearScreen = '';

for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'AC') {
            screen.value = '';
        } else if (buttonText == 'C') {
            screen.value = screen.value.substr(0, screen.value.length - 1);
        } else if (buttonText == '=') {
            screen.value = eval(screen.value);
        } else {
            screen.value += buttonText;
        }
    })
}