function appendToAnswer(value) {
    document.form.answers.value += value;
}

function calculate() {
    document.form.answers.value = eval(document.form.answers.value);
}

function clearAll() {
    document.form.answers.value = '';
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}
