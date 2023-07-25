import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../menuStore.ts';

// Panda CSS
import { css } from '../../../styled-system/css'

export default function MenuFlyout() {
    const $isMenuOpen = useStore(isMenuOpen);

    return $isMenuOpen ? (
        <div className={`navigation-wrapper ${css({ w: '100%', h: 'calc(100dvh - 5rem)', bottom: '0', position: 'absolute', bg: '2023-black', zIndex: '100' })}`}>Test</div>
    ) : null;
}
