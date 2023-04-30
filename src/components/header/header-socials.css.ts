import { globalStyle, style } from '@vanilla-extract/css'
import { breakpoint } from '../../utils/styles/breakpoints'
import { calcRem } from '../../utils/styles/calc-rem'
import { metrics } from '../../utils/styles/metrics'
import { theme } from '../../theme.css'
import { srOnly } from '../../utils/styles/accessibility'

export const socialsUl = style({
    display: 'none',
    flexDirection: 'row',
    padding: 0,
    margin: calcRem(0, metrics.md),

    [breakpoint('sm')]: {
        display: 'flex',
    },
})

export const socialsLink = style({
    display: 'flex',
    margin: calcRem(0, metrics.sm),
    outline: 0,
})

globalStyle(`${socialsLink} > span`, srOnly)
globalStyle(`${socialsLink} > img`, {
    display: 'block',
    width: calcRem(metrics.lg),
    height: calcRem(metrics.lg),
    fill: theme.colors.grey800,
    transition: 'fill 0.25s ease',
})
globalStyle(`${socialsLink}:hover > img`, {
    fill: theme.colors.dddpink,
})
globalStyle(`${socialsLink}:focus > img`, {
    fill: theme.colors.dddpink,
})
