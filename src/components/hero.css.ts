import { globalStyle, style } from '@vanilla-extract/css'
import { calcRem } from '../utils/styles/calc-rem'
import { metrics } from '../utils/styles/metrics'
import { breakpoint } from '../utils/styles/breakpoints'
import { theme } from '../theme.css'

export const hero = style({
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    padding: calcRem(80, metrics.md),
    marginBottom: metrics.md,
    backgroundImage: `url(/hero/hero_w640.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    '@media': {
        [breakpoint('sm')]: {
            backgroundImage: `url(/hero/hero_w768.jpg)`,
        },

        [breakpoint('md')]: {
            backgroundImage: `url(/hero/hero_w1024.jpg)`,
        },

        [breakpoint('lg')]: {
            backgroundImage: `url(/hero/hero_w1280.jpg)`,
        },

        [breakpoint('xl')]: {
            backgroundImage: `url(/hero/hero_w1920.jpg)`,
        },
    },
})

export const conferenceDetails = style({
    display: 'block',
    width: '80%',
    maxWidth: calcRem(1000),
    color: theme.colors.white,
    fontSize: '7vmin',
    fontWeight: theme.weights.bold,
    lineHeight: 1,
    textAlign: 'right',

    '@media': {
        [breakpoint('md')]: {
            width: '56%',
        },
    },
})

globalStyle(`${hero} > time`, {
    display: 'block',
})
globalStyle(`${hero} > span`, {
    display: 'inline-block',
    width: '70%',
})

export const credit = style({
    position: 'absolute',
    right: calcRem(20),
    bottom: calcRem(20),
    color: theme.colors.white,
    fontWeight: 400,
    fontSize: calcRem(10),
})

globalStyle(`${credit} > a`, {
    color: theme.colors.white,
})
