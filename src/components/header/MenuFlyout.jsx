// Libraries
import React from 'react';
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../menuStore.ts';

// Data
import { menuData } from '../../../lib/menu.ts';

// Panda CSS
import { css } from '../../../styled-system/css';

export default function MenuFlyout() {
    const $isMenuOpen = useStore(isMenuOpen);

    const getOrder = (index) => {
        switch (index) {
            case 0:
                return css({ xs:  { order: 1 } });
            case 1:
                return css({ xs:  { order: 3 } });
            case 2:
                return css({ xs:  { order: 2 } });
            case 3:
                return css({ xs:  { order: 4 } });
            case 4:
                return css({ xs:  { order: 5 } });
            default:
                return css({ xs:  { order: 0 } });
        }
    }

    return $isMenuOpen ? (
        <>
            <div
                className={`click-catch-wrapper ${css({ w: '100%', h: '100%', minH: 'calc(100dvh - 5rem)', top: '5rem', position: 'absolute', inset: '0', bg: 'black', opacity: '0.75', md: { display: 'none' } })}`}
                onClick={() => isMenuOpen.set(!$isMenuOpen)}
            />
            <div className={`navigation-wrapper ${css({ w: '100%', h: 'auto', minH: 'calc(100dvh - 5rem)', top: '5rem', position: 'absolute', bg: '2023-black', zIndex: '100', md: { display: 'none' } })}`}>
                <div className={`padding-wrapper ${css({ w: '100%', p: '6' })}`}>
                    {/*<div className={`content-wrapper ${css({ w: '100%', display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '6', xs: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }, sm: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' } })} }`}>*/}
                    <div className={`content-wrapper ${css({ w: '100%', display: 'grid', gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', gap: '6', xs: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }, sm: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' } })} }`}>
                        {/*<div className={`menu-top-level ${css({ w: '100%', display: 'flex', flexDir: 'column', mt: '4', _first: { mt: '0' } })}`} />*/}
                        {menuData.map((item, index) => (
                            <div
                                key={index}
                                className={`menu-top-level ${css({ w: '100%', display: 'flex', flexDir: 'column' })} ${getOrder(index)}`}
                            >
                                <a
                                    href={item.link}
                                    className={`top-level-link ${css({ fontFamily: 'display', color: 'white', fontSize: '2xl', fontWeight: 'semibold', p: '2' })}`}
                                >
                                    {item.title}
                                </a>
                                {item.subPages ? (
                                    <div className={`submenu-wrapper ${css({ w: '100%', display: 'flex', flexDir: 'column' })}`}>
                                        {item.subPages.map((subPage, index) => (
                                            <div
                                                key={index}
                                                className={`submenu-items ${css({ w: '100%', display: 'flex', flexDir: 'column' })}`}
                                            >
                                                <a
                                                    href={subPage.link}
                                                    className={`top-level-link ${css({ px: '2', py: '3', fontFamily: 'body', color: '2023-gray-light', fontSize: 'lg', fontWeight: 'medium' })}`}
                                                >
                                                    {subPage.title}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    ) : null;
}
