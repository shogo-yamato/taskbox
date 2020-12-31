module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // JestでStorybookを使う設定行
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
};
