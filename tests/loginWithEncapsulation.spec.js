const login_obj = require('../page/login.js');
require("custom-env").env();

Feature("登录");

const config = {
  account: process.env.account,
  password: process.env.password,
};
const rule = {
  loginPageShow: "帐号登录",
  intelligentValidation: "验证成功",
  loginSucceedTxt: "新 建",
};

Scenario("登录 - 封装方法", async (I) => {
  I.amOnPage("https://www.kdocs.cn");
  login_obj.clickLoginEntranceToLoginPage(rule.loginPageShow);
  login_obj.clickPrivacyCheckbox();
  login_obj.clickPhoneOrEmailEntrance();
  login_obj.fillEmailField(config.account);
  login_obj.fillPasswordField(config.password);
  login_obj.intelligentValidation(rule.intelligentValidation);
  login_obj.clickLoginButton(rule.loginSucceedTxt);
});



