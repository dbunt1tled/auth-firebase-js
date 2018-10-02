class AuthAlert {
    constructor() {
        this.container = document.querySelector('.login-section .card');
    }
    showAlert(message) {
        const template = `<div class="alert alert-danger loginAlert">${message}</div>`;
        this.container.insertAdjacentHTML('beforebegin', template);
        this.hideAlert();
    }
    hideAlert() {
        const currentAlert = document.querySelector('.loginAlert');
        setTimeout(() => {
            if (currentAlert) {
                currentAlert.remove();
            }
        },3000);
    }
}