const submitBtn = document.getElementById('submitBtn');
const textInputs = document.querySelectorAll('.write_text1, .write_text2, .write_text3');

function checkFields() {
    for (let input of textInputs) {
        if (input.value.trim() === '') {
            return false;
        }
    }
    return true;
}

textInputs.forEach(input => {
    input.addEventListener('input', () => {
        submitBtn.style.display = checkFields() ? 'inline' : 'none';
    });
});

window.addEventListener('DOMContentLoaded', () => {
    submitBtn.style.display = checkFields() ? 'inline' : 'none';
});