import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../atoms/menuStore';

export default function MenuFlyout() {
    const $isMenuOpen = useStore(isMenuOpen);

    return $isMenuOpen ? (
        <span>Test</span>
    ) : null;
}
