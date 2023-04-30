import { theme, themeValues } from '../../theme.css'

export const calcRem = (...values: number[]): string =>
    values.map((value) => (value !== 0 ? `${value / Number(themeValues.fonts.defaultSize)}rem` : 0)).join(' ')
