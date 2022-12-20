import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'nivvy-light',
    values: [
      {
        name: 'nivvy-light',
        value: theme.colors.white
      },
      {
        name: 'nivvy-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]