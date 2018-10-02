const auth = new Auth();
const alert = new AuthAlert();

const form = document.forms['login-form'];

const emailInput = form.elements['email'];
const passwordInput = form.elements['password'];

auth.getUser()
    .then(user => {
        if (user) {
            window.location = 'index.html';
        }
    });
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (emailInput.value && passwordInput.value) {
        auth.login(emailInput.value, passwordInput.value)
            .then(() => {
                window.location = 'index.html';
            })
            // приходит объект и мы приводим к типу если знаем его поля
            .catch(({code, message}) => alert.showAlert(`${code}: ${message}`));
    }
})
