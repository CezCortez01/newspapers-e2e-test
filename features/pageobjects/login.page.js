class LoginPage {
    get loginButton() { return $('a[data-link-name="login"]'); }
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#password'); }
    get submitButton() { return $('button[type="button"]'); }

    async open() {
        await browser.url('/');
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
}

module.exports = new LoginPage();
