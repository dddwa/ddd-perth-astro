// Libraries
import React, {useState} from 'react';

// Panda CSS
import { css } from '../../../../styled-system/css';

export default function CircleDateModule() {

    const backgroundText = 'Oct 7 Oct 7 Oct 7 Oct 7 '; // Make sure to add space at end
    const innerText = 'Optus Stadium';
    let numChars = 0;
    backgroundText.split('').map(() => {
        numChars++;
    });
    const angle = 180/numChars;

    return (
        <div className={`circle-date-module ${css({ w: '100%', h: '100%', position: 'absolute' })}`}>
            <div className={`top ${css({ w: '100%', h: '75%', position: 'absolute', top: '0', overflow: 'hidden' })}`}>
                <div className={`animation-wrapper ${css({ position: 'absolute', w: '32', h: '32', top: '0', transformOrigin: 'center', transition: 'transform', zIndex: '3', animation: 'rotateText 20s linear infinite', xs: { w: '40', h: '40', top: '0' }, sm: { w: '40', h: '40', top: '0' }, lg : { w: '64', h: '64', top: '0' } })}`}>
                    <div className={`text-adjustment-white ${css({ w: '100%', h: '100%', position: 'absolute', top: '-16', xs: { top: '-20' }, lg: { top: '-32' } })}`}>
                        {backgroundText.split('').map((char, index) => (
                            <span
                                style={{ transform: `translate(0,0) rotate(${index * angle * 2}deg)` }}
                                className={`letter ${css({ fontSize: 'lg', lineHeight: '1.6rem', color: 'white', fontFamily: 'display', display: 'inline-block', fontWeight: 'medium', textAlign: 'center', position: 'absolute', w: 'auto', h: '16', left: '16', top: '16', transformOrigin: 'bottom center', xs: { h: '20', left: '20', top: '20', fontSize: 'xl', lineHeight: '2rem' }, lg: { fontSize: '3xl', h: '32', left: '32', top: '32', lineHeight: '2.4rem' } })}`}
                                key={index}
                            >
                            {char}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`bottom ${css({ w: '100%', h: '25%', position: 'absolute', bottom: '0', overflow: 'hidden' })}`}>
                <div className={`animation-wrapper ${css({ position: 'absolute', w: '32', h: '32', top: '-24', transformOrigin: 'center', transition: 'transform', zIndex: '3', animation: 'rotateText 20s linear infinite', xs: { w: '40', h: '40', top: '-7.5rem' }, sm: { w: '40', h: '40', top: '-7.5rem' }, lg: { w: '64', h: '64', top: '-48' } })}`}>
                    <div className={`text-adjustment-black ${css({ w: '100%', h: '100%', position: 'absolute', bottom: '16', xs: { bottom: '20' }, lg: { bottom: '32' } })}`}>
                        {backgroundText.split('').map((char, index) => (
                            <span
                                style={{ transform: `translate(0,0) rotate(${index * angle * 2}deg)` }}
                                className={`letter ${css({ fontSize: 'lg', lineHeight: '1.6rem', color: 'black', fontFamily: 'display', display: 'inline-block', fontWeight: 'medium', textAlign: 'center', position: 'absolute', w: 'auto', h: '16', left: '16', top: '16', transformOrigin: 'bottom center', xs: { h: '20', left: '20', top: '20', fontSize: 'xl', lineHeight: '2rem' }, lg: { fontSize: '3xl', h: '32', left: '32', top: '32', lineHeight: '2.4rem' } })}`}
                                key={index}
                            >
                            {char}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`inner-text ${css({ position: 'absolute', w: '100%', h: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', p: '6', xs: { p: '8' }, lg: { p: '20' }, xl: { p: '16' } })}`}>
                <span className={`${css({ color: 'white', textAlign: 'center', fontSize: 'sm', fontWeight: 'semibold', fontFamily: 'display', lg: { fontSize: 'lg' }, xl: { fontSize: '2xl' } })}`}>
                    {innerText}
                </span>
            </div>
        </div>
    );
}
