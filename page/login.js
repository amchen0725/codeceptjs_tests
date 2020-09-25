const { I } = inject()
const locations = {
    loginEntrance: '立即使用',
    privacyCheckbox: 'input#loginProtocal',
    emailField: 'div.form_item.mt0>input#email',
    passwordField: "div.form_item>input[type='password']",
    verificationBtn: "div[class='sm-btn-wrapper']",
    loginBtn: '#login',
    insideLocator: '#mainWrap',
    locatedLocator: "span[class='js_toProtocolDialog tpItem tpItem_account']",
};

module.exports = {
    clickLoginEntranceToLoginPage: (text) => {
        I.click(locations.loginEntrance)
        I.waitForElement(locations.privacyCheckbox, 5)
        I.see(text)
    },

    clickPrivacyCheckbox: () => {
        I.click(locations.privacyCheckbox)
    },

    clickPhoneOrEmailEntrance: () => {
        const text = '手机或邮箱'
        I.click(locate(locations.locatedLocator)
            .inside(locations.insideLocator)
            .withText(text))
    },

    fillEmailField: (email) => {
        I.fillField(locations.emailField, email)
    },

    fillPasswordField: (password) => {
        I.fillField(locations.passwordField, password)
    },

    intelligentValidation: (text) => {
        I.click(locations.verificationBtn)
        I.see(text)
    },

    clickLoginButton: (text) => {
        I.click(locations.loginBtn)
        I.wait(5)
        I.see(text)
    },
}