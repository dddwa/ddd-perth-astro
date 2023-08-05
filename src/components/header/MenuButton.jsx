// Libraries
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../menuStore.ts';

// Panda CSS
import { css } from '../../../styled-system/css'

export default function MenuButton() {
    // read the store value with the `useStore` hook
    const $isMenuOpen = useStore(isMenuOpen);

    return (
        <button
            onClick={() => isMenuOpen.set(!$isMenuOpen)} // write to the imported store using `.set`
            className={css({ w: '28', h: '20', fontFamily: 'display', fontWeight: 'semibold', position: 'relative', zIndex: '101', cursor: 'pointer', md: { display: 'none' } })}
        >
            {$isMenuOpen ? 'Close' : 'Menu'}
        </button>
    )
}
