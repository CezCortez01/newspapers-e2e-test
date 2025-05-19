const { Given, When, Then } = require('@wdio/cucumber-framework');

const SELECTORS = {
    emailInput: 'input[name="email"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[title="Sign in with Newspapers.com"]',
    recaptchaIframe: 'iframe[title="reCAPTCHA"]' 
};


Given('I am on the Newspapers.com login page', async () => {
    await browser.url('https://www.newspapers.com/signin/?next_url=/?');
    await $(SELECTORS.emailInput).waitForExist({ timeout: 15000, timeoutMsg: 'Email input did not appear on login page' });
});

When('I submit valid login credentials', async () => {
    const emailInput = await $(SELECTORS.emailInput);
    const passwordInput = await $(SELECTORS.passwordInput);

    await emailInput.setValue('lourdes100@test.com');
    await passwordInput.setValue('Test123!');
});

When('I manually solve the reCAPTCHA challenge', async () => {
    console.log('---');
    console.log('🔒 ACTION REQUIRED: Please solve the reCAPTCHA in the browser window.');
    console.log('    (You have 45 seconds to complete this action)');
    console.log('---');

    
    await browser.pause(45000);
});


When('I click the Sign In button', async () => {
    const loginBtn = await $(SELECTORS.loginButton);
    await loginBtn.waitForClickable({ timeout: 5000, timeoutMsg: 'Login button was not clickable' });
    await loginBtn.click();
});

Then('I should be successfully redirected to the homepage', async () => {
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/?'),
        {
            timeout: 20000, 
            timeoutMsg: 'Expected to be redirected to homepage after login, but URL did not change.'
        }
    );
    console.log('Login successful! Current URL:', await browser.getUrl());
});