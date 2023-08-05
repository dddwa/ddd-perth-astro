// Libraries
import React, {useState} from 'react';

// Data
import { menuData } from '../../../lib/menu.ts';

// Panda CSS
import { css } from '../../../styled-system/css';

export default function DesktopLinks() {
    const [activeIndex, setActiveIndex] = useState(0);

    const DesktopButton = ({ item, index }) => {
        const buttonToggle = () => {
            if (activeIndex === index) {
                setActiveIndex(0);
            } else {
                setActiveIndex(index);
            }
        };

        const DropdownButton = ({ subPage, style }) => {
            return (
                <div className={`submenu-items ${css({ w: '100%', display: 'flex', flexDir: 'column', px: '2', py: '2' })} ${style === 'parent' ? css({ bg: 'white' }) : style === 'child' ? css({ bg: '2023-white-ii' }) : ''}`}>
                    <a
                        href={subPage.link}
                        className={`top-level-link ${css({ w: '100%', px: '3', lg: { px: '4' }, fontFamily: 'body', color: '2023-gray', fontSize: 'base', fontWeight: 'medium', transition: 'colors', _hover: { color: '2023-black' }, _active: { color: '2023-black' }, _focus: { ring: '1', ringColor: '2023-green' } })} ${style === 'parent' ? css({ py: '2' }) : style === 'child' ? css({ py: '1' }) : ''}`}
                    >
                        {subPage.title}
                    </a>
                </div>
            );
        };

        return (
            <div className={`button-wrapper ${css({ w: 'auto', position: 'relative', py: '5' })} ${(index === activeIndex) ? css({ outline: '1px', outlineColor: '2023-gray-light-ii', outlineStyle: 'solid' }) : ''}`}>
                <button
                    className={`desktop-button ${css({ display: 'flex', flexDir: 'row', justifyContent: 'center', alignItems: 'center', px: '5', lg: { px: '6' }, xl: { px: '8' }, py: '4', cursor: 'pointer', fontFamily: 'display', transition: 'colors', _hover: { color: '2023-green' }, _active: { color: '2023-green' }, _focus: { ring: '1', ringColor: '2023-green' } })} ${(index === activeIndex) ? css({ fontWeight: 'bold', color: '2023-black' }) : css({ fontWeight: 'semibold', color: '2023-gray' })}`}
                    onClick={buttonToggle}
                >
                    <span>
                        {item.title}
                    </span>
                    <svg className={`caret-down ${css({ w: '4', ml: '4', mt: '0.5', display: 'none', lg: { display: 'block' } })} ${(index === activeIndex) ? css({ rotate: '180deg' }) : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 9" fill="none"><path stroke="currentColor" strokeWidth="1.6" d="m1 1.5 6 6 6-6"/></svg>
                </button>
                {(index === activeIndex) ? (
                    <div className={`desktop-offcanvas-wrapper ${css({ position: 'absolute', w: '56', bg: 'white', top: '24', display: 'flex', flexDir: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', border: '1px', borderColor: '2023-gray-light-ii', borderStyle: 'solid', roundedBottom: '10px', overflow: 'hidden' })}`}>
                        {/* Parent Link */}
                        <DropdownButton subPage={item} style={`parent`} />

                        {/* Children Links */}
                        <div className={`children-links ${css({ w: '100%', display: 'flex', flexDir: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', py: '2', bg: '2023-white-ii' })}`}>
                            {item.subPages.map((subPage, index) => (
                                <DropdownButton subPage={subPage} style={`child`} key={index} />
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }

    return (
        <>
            {activeIndex > 0 ? (
                <div
                    className={`click-catch-wrapper ${css({ w: '100%', h: '100%', minH: '100dvh', inset: '0', position: 'absolute', opacity: '0', zIndex: '9' })}`}
                    onClick={() => setActiveIndex(0)}
                />
            ) : null}
            <div className={`desktop-links ${css({ w: '100%', h: '100%', display: 'flex', position: 'relative', flexDir: 'row', justifyContent: 'center', alignItems: 'center', mr: '4', zIndex: '10' })}`}>
                {menuData.map((item, index) => (
                    item.subPages ? (
                        <DesktopButton item={item} index={index + 1} key={index} />
                    ) : (
                        <div className={`${css({ py: '5' })}`} key={index}>
                            <a href={item.link} className={`desktop-link ${css({ px: '5', lg: { px: '6' }, xl: { px: '8' }, py: '4', cursor: 'pointer', fontFamily: 'display', fontWeight: 'semibold', color: '2023-gray', transition: 'colors', _hover: { color: '2023-green' }, _active: { color: '2023-green' }, _focus: { ring: '1', ringColor: '2023-green' } })}`}>
                                {item.title}
                            </a>
                        </div>
                    )
                ))}
            </div>
        </>
    )
}
