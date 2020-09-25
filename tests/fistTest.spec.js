Feature("My First Test");

Scenario("test something", (I) => {
  I.amOnPage("https://www.baidu.com");
  I.see("百度");
});
