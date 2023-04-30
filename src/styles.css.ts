import { style } from '@vanilla-extract/css'
import { calcRem } from './utils/styles/calc-rem'
import { theme, themeValues } from './theme.css'
import { metrics } from './utils/styles/metrics'

export const styledPara = style({
    marginBottom: calcRem(metrics.lg),
    color: theme.colors.body,
    fontSize: calcRem(Number(themeValues.fonts.defaultSize)),
    lineHeight: theme.fonts.lineHeight,
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
})
