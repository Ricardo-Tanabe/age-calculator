import { datepicker } from 'https://cdn.jsdelivr.net/npm/js-datepicker/dist/datepicker.min.js';

const picker = datepicker('#birthdate', {
    formatter: (input, date) => {
        input.value = date.toLocaleDateString('en-GB');
    },
    minDate: new Date(),
    position: 'tr',
})

// const inputDatepicker = document.querySelector('#birthdate')

// inputDatepicker.addEventListener('input', () => {
//     const value = inputDatepicker.value.replace(/\D/g, '');
//     if(!isNaN(Number(value)) && value.trim() !== '') {
//         const formattedValue = [];
//         for(let i = 0; i < value.length; i++) {
//             if(i === 2 || i ===4) {
//                 formattedValue.push('/')
//             }
//             formattedValue.push(value[i]);
//         }
//         inputDatepicker.value = formattedValue.join('');
//         const numericValue = value;
//         console.log(numericValue)
//     } else {
//         inputDatepicker.value = value.slice(0,-1);
//     }
// })