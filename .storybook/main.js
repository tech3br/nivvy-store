module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-postcss'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}