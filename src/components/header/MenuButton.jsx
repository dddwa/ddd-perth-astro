// Libraries
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../atoms/menuStore';

// Panda CSS
import { css } from '../../../styled-system/css'

export default function MenuButton() {
    // read the store value with the `useStore` hook
    const $isMenuOpen = useStore(isMenuOpen);
    // write to the imported store using `.set`
    return (
        <button
            onClick={() => isMenuOpen.set(!isMenuOpen)}
            className={css({ px: '8', h: '20', sm: { display: 'none' } })}
        >
            Menu
        </button>
    )
}
