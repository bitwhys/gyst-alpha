import { withThemeByClassName } from '@storybook/addon-themes'

export const withTheme = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
    system: 'system',
  },
  defaultTheme: 'system',
})
