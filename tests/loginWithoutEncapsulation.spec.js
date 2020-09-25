require("custom-env").env();

Feature("登录");

const config = {
  account: process.env.account,
  password: process.env.password,
};
const rule = {
  loginPageShow: "帐号登录",
  intelligentValidation: "验证成功",
  loginSucceedTxt: "勿删企业",
};

Scenario("登录 - 不封装方法", async (I) => {
  // Click login entrance
  I.amOnPage("https://www.kdocs.cn");
  I.click("立即使用");
  I.waitForElement("input#loginProtocal", 5);
  I.see(rule.loginPageShow);
  // Click privacy checkbox
  I.click("input#loginProtocal");
  // Click Phone and email entrance
  I.click(
    locate("span[class='js_toProtocolDialog tpItem tpItem_account']")
      .inside("#mainWrap")
      .withText("手机或邮箱")
  );
  // Fill email and password
  I.fillField("div.form_item.mt0>input#email", process.env.account);
  I.fillField("div.form_item>input[type='password']", process.env.password);
  // Intelligent varification
  I.click("div[class='sm-btn-wrapper']");
  I.see(rule.intelligentValidation);
  //  Click Login button and verify
  I.click("#login");
  I.wait(5);
  I.see(rule.loginSucceedTxt);
});
