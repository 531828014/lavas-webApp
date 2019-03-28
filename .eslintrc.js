module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-multi-spaces": ["error", { ignoreEOLComments: false }],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "indent" : ["error", 4, { "SwitchCase": 1 }],
        "space-before-blocks" : ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error", {"int32Hint": false}],
        "space-unary-ops": ["error", {"words": true, "nonwords": true, "overrides" : {"!": false, "-": false, '++': false, '--': false}}],
        "quotes": ["error", "single"],
        "no-duplicate-imports": ["error"],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "array-bracket-spacing": ["error", "never",],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "brace-style": ["error"],
        // "camelcase": ["error"],
        "computed-property-spacing": ["error", "never"]
    },
    parserOptions: {
        parser: "babel-eslint"
    }
  };
  
