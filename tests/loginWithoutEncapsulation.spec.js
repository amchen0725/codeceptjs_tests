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

Scenario("登录 - 不封装方法", async (I) => {
  // Click login entrance
  I.amOnPage("https://www.kdocs.cn");
  pause()
  I.click(locate(".use-now").withText("立即使用"));
  I.click(locate(".nav_tab_item").withText("帐号登录"));
  I.waitForElement("input#loginProtocal", 10);
  I.see(rule.loginPageShow);
  // Click privacy checkbox
  I.click("input#loginProtocal");
  // Click more btn
  I.click(".js_toProtocolDialog.more");
  I.waitForVisible("#moreWrap", 5);
  // Click Phone and email entrance
  I.click("#account");
  I.waitForVisible(locate('#accountWrap').find('.nav_title').withText('帐号密码登录'));
  // Fill email and password
  I.fillField("#email", process.env.account);
  I.fillField("#password", process.env.password);
  // Intelligent varification
  I.click(".sm-btn-wrapper");
  I.waitForText(rule.intelligentValidation, 5);
  //  Click Login button and verify
  I.click("#login");
  I.waitForText(rule.loginSucceedTxt, 5);
});
