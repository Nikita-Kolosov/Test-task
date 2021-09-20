'use strict';
const buttonAction = document.getElementById('button');

buttonAction.addEventListener('click', function (e) {
    const button = e.target;
    // const buttonValue = button;

    if (button) {
        alert('·   Имя\n\r·   Телефон\n\r·   Email\n\r·   Название товара\n\r');
    }
    }
)

