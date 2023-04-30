import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { zIndex } from '../utils/styles/zindex'
import { theme } from '../theme.css'
import { calcRem } from '../utils/styles/calc-rem'
import { breakpoint } from '../utils/styles/breakpoints'

export const header = style({
    position: 'sticky',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    backgroundColor: theme.colors.white,
    border: 0,
    borderBottom: `1px solid ${theme.colors.lightGrey}`,
    zIndex: zIndex.stickyHeader,
})

export const anchor = style({
    display: 'flex',
    margin: 0,
    marginRight: 'auto',
    marginLeft: 'auto',
    cursor: 'pointer',
    transition: 'transform 0.25s ease',
    outline: 0,

    ':hover': {
        transform: `scale(1.1) rotate(5deg)`,
    },
    ':focus': {
        transform: `scale(1.1) rotate(5deg)`,
    },
})
globalStyle(`${anchor} > img`, {
    width: calcRem(144),
    height: calcRem(28),

    '@media': {
        [breakpoint('sm')]: {
            width: calcRem(176),
            height: calcRem(35),
        },
    },
})
