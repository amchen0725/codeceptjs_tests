const { I } = inject()
const locations = {
    loginEntrance: locate(".use-now").withText("立即使用"),
    loginType :locate(".nav_tab_item").withText("帐号登录"),
    privacyCheckbox: 'input#loginProtocal',
    moreBtn: '.js_toProtocolDialog.more',
    moreWrap:'#moreWrap',
    account: '#account',
    accountWrap: locate('#accountWrap').find('.nav_title').withText('帐号密码登录'),
    emailField: '#email',
    passwordField: "#password",
    verificationBtn: ".sm-btn-wrapper",
    loginBtn: '#login',
};

module.exports = {
    clickLoginEntranceToLoginPage: (text) => {
        I.click(locations.loginEntrance)
        I.click(locations.loginType)
        I.waitForElement(locations.privacyCheckbox, 10)
        I.see(text)
    },

    clickPrivacyCheckbox: () => {
        I.click(locations.privacyCheckbox)
    },

    clickMoreBtn: () => {
        I.click(locations.moreBtn)
        I.waitForVisible(locations.moreWrap, 5)
    },

    clickPhoneOrEmailEntrance: () => {
        I.click(locations.account);
        I.waitForVisible(locations.accountWrap);
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
        I.waitForText(text, 5)
    },
}
