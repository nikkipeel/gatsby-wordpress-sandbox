// .storybook/main.js

const config = {
  // Required
  // Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
  framework: "@storybook/react-webpack5",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  // Optional
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag",
  },
}
export default config
