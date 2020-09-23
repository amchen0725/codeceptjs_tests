const { I } = inject();

Feature("My First Test");

Scenario("test something", () => {
  I.amOnPage("https://github.com");
  I.see("GitHub");
});
