module.exports = {
    extends: [
        'alloy',
        'alloy/typescript',
    ],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        // browser: true,
        node: true,
        mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        Scenario:false,
        Feature:false,
        actor:false,
        Helper:false,
        pause:false,
        within:false,
        session:false,
        DataTable:false,
        locate:false,
        inject:false,
        secret:false,
        codeceptjs:false,
        I:true,
        AfterSuite:false,
        BeforeSuite:false,
        expect:true,
        autos:true,
        After:false,
        Before:false,
        xScenario:false,
        Fail:false,
        xFeature:false
    },
    rules: {
        // 自定义你的规则
    },
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/triple-slash-reference":"off",
      "spaced-comment":"off",
      "@typescript-eslint/no-require-imports":"off",
      "max-params": ["error", 5],
      "@typescript-eslint/explicit-member-accessibility": "off",
      "prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
    }],
    "object-shorthand": ["error", "always"],
    // "array-callback-return": "error",
    "prefer-destructuring":["error", {
        "VariableDeclarator": {
          "array": false,
          "object": false
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      }, {
        "enforceForRenamedProperties": false
      }],
    "prefer-template": "error",
    "template-curly-spacing": ["error", "never"],
    // "func-style":"error",
    "prefer-spread": "error",
    "prefer-arrow-callback": "error",
    // "arrow-body-style": ["error", "always"],
    // "no-sequences":"off",
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "dot-notation": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-nested-ternary":"error",
    "no-unneeded-ternary":"error",
    // "no-mixed-operators": "error",
    "no-else-return": "error",
    "no-restricted-globals": ["error","isNaN","isFinite"],
    }
};