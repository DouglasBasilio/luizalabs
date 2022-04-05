// loading
const spinner = document.querySelector('#spinner')
const API_URL = 'http://localhost:8080/api/user'

function job(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, 3000)
    })
}

/* direcionar todas as classes e Id do HTML dentro do JS */

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

/* armazenar as classes e Id dentro das variáveis */

let username = id('username'),
    password = id('password'),
    form = id('form'),

    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');

// obter resposta
function response(response) {
    return response.json()
}

// validação dos dados
function signin(data) {
    const inputUser = username.value
    const inputPass = password.value

    user(username, 0, 'Usuário incorreto');
    pass(password, 1, 'Senha incorreta');

    login = data[0].login
    senha = data[0].password

    if (inputUser == login && inputPass == senha) {
        spinner.classList.remove('hidden')

        job(inputPass).then(() => {

            window.location.href = '../welcome.html'
        })

    } else {
        alert('Valide os campos em destaque')
    }
}

// caso de erro, mostre um alerta
function showError() {
    alert('Ops, algo deu errado. Verifique sua conexão com o servidor')
}

/* direcionar o form para um event listner */

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(API_URL)
    .then(response)
    .then(signin)
    .catch(showError)
});

/* função que fará a validação do form, contendo 3 argumentos 

- serial: terá como alvo as classes
- mensagem: imprimirá uma msg dentro da classe .error

*/

let user = (username, serial, message) => {
    if (username.value.trim() != 'magalu') {
        errorMsg[serial].innerHTML = message;
        username.style.border = '2px solid red';

        // icones
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }

    else {
        errorMsg[serial].innerHTML = "";
        username.style.border = '2px solid green';

        // icones
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}

let pass = (password, serial, message) => {
    if (password.value.trim() != 'm@galu123') {
        errorMsg[serial].innerHTML = message;
        password.style.border = '2px solid red';

        // icones
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }

    else {
        errorMsg[serial].innerHTML = "";
        password.style.border = '2px solid green';

        // icones
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}