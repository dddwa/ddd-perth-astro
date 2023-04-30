import { globalStyle, style } from '@vanilla-extract/css'
import { calcRem } from '../utils/styles/calc-rem'
import { metrics } from '../utils/styles/metrics'

export const main = style({
    display: 'grid',
    gridTemplateColumns: 'minmax(1rem, 1fr) minmax(0, 120ch) minmax(1rem, 1fr)',
    gridGap: calcRem(metrics.md),
    marginTop: calcRem(metrics.xl),
    marginBottom: calcRem(metrics.xl),
})

globalStyle(`${main} > *`, {
    gridColumn: 2,
})
