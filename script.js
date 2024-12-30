const birthdateInput = document.getElementById('birthdate');
const dateIcon = document.getElementById('date-icon');
const result = document.getElementById('result');
const submitButton = document.getElementById('calculate');
const inputDatepicker = document.querySelector('#birthdate');
const dateTime = luxon.DateTime;

const picker = datepicker(dateIcon, {
    onSelect: (instance, date) => {
        birthdateInput.value = date.toLocaleDateString('en-GB');
        const currentYear = date.getFullYear();
    },
    maxDate: new Date(),
    position: 'br',
})

inputDatepicker.addEventListener('input', () => {
    const value = inputDatepicker.value.replace(/\D/g, '');
    if(!isNaN(Number(value)) && value.trim() !== '') {
        const formattedValue = [];
        for(let i = 0; i < value.length; i++) {
            if(i === 2 || i ===4) {
                formattedValue.push('/')
            }
            formattedValue.push(value[i]);
        }
        let correctFormat = formattedValue.join('');
        if(correctFormat.slice(0, 2) > 31) {
            correctFormat = '';
        }
        if(correctFormat.slice(3, 5) > 12) {
            correctFormat = value.slice(0, 2) + '';
        }
        if(correctFormat.slice(6, 10) > picker.currentYear) {
            correctFormat = value.slice(0, 2) + '/' + value.slice(2, 4) + '';
        }
        inputDatepicker.value = correctFormat
    } else {
        inputDatepicker.value = value.slice(0,-1);
    }
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(inputDatepicker.value.length === 10) {
        const [day, month, year] = inputDatepicker.value.split('/').map(Number);

        const birthdate = dateTime.local(year, month, day);
        const now = dateTime.now();

        const diff = now.diff(birthdate, ['years', 'months']);
        const years = Math.floor(diff.years);
        const months = Math.floor(diff.months % 12);

        result.innerHTML = `You are ${years} years ${months} months old`;
    } else {
        result.innerHTML = "Formato da data está incorreto"
    }
})