// Libraries
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../menuStore.ts';

// Data
import { menuData } from '../../../lib/menu.ts'

// Panda CSS
import { css } from '../../../styled-system/css'
import { grid } from '../../../styled-system/patterns'

export default function MenuFlyout() {
    const $isMenuOpen = useStore(isMenuOpen);

    return $isMenuOpen ? (
        <div className={`navigation-wrapper ${css({ w: '100%', h: 'calc(100dvh - 5rem)', bottom: '0', position: 'absolute', bg: '2023-black', zIndex: '100' })}`}>
            <div className={`padding-wrapper ${css({ w: '100%', p: '6' })}`}>
                <div className={`content-wrapper ${css({ w: '100%' })} ${grid({ columns: 2, gap: '6' })}`}>
                    {/*<div className={`menu-top-level ${css({ w: '100%', display: 'flex', flexDir: 'column', mt: '4', _first: { mt: '0' } })}`} />*/}
                    {menuData.map((item, index) => (
                        <div
                            key={index}
                            className={`menu-top-level ${css({ w: '100%', display: 'flex', flexDir: 'column' })}`}
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
                                                className={`top-level-link ${css({ px: '2', py: '3', fontFamily: 'body', color: '2023-gray', fontSize: 'lg', fontWeight: 'medium' })}`}
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
    ) : null;
}
