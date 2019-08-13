// Validar formulario
const inputs = document.querySelectorAll('form .campo input');

// Listener a los inputs

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);
});
inputs.forEach(input => {
    input.addEventListener('input', validarInput);
});

function validarInput(e) {
    console.log(e.target.value);
    const status = ['valid', 'invalid'];

    const CLASS = (e.target.value.length === 0) ? status[1] : status[0];
    // Set custom css
    e.target.classList.remove(...status);
    e.target.nextElementSibling.classList.remove(...status);
    e.target.classList.add(CLASS);
    e.target.nextElementSibling.classList.add(CLASS);
    // Inyectar dinámicamente el div con el error
    if (CLASS === 'invalid') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alert') {
            const divError = document.createElement('div');
            divError.appendChild(document.createTextNode('Campo obligatorio * '));
            divError.classList.add('alert');

            e.target.parentElement.parentElement.insertBefore(
                divError,
                e.target.parentElement.nextElementSibling
            )
        }
    } else {
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alert') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

// Show and hide password 

const showPassBtn = document.querySelector('form .campo span');

showPassBtn.addEventListener('click', (e) => {
    const passInput = document.querySelector('#password');
    if (e.target.classList.contains('mostrar')) {
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar';
        passInput.type = 'text';
    } else {
        e.target.classList.add('mostrar');
        e.target.textContent = 'Mostrar';
        passInput.type = 'password';
    }
})