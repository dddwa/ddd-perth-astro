// Libraries
import React, {useState} from 'react';

// Panda CSS
import { css } from '../../../styled-system/css'

export default function DesktopLinks() {
    const DesktopButton = () => {
        const [buttonState, setButtonState] = useState(false);

        return (
            <div className={`button-wrapper ${css({ w: 'auto' })}`}>
                <button
                    className={`desktop-button ${css({ px: '8', py: '5', cursor: 'pointer' })}`}
                    onClick={() => setButtonState(!buttonState)}
                >
                    Test
                </button>
                {buttonState ? (
                    <div className={`desktop-offcanvas-wrapper ${css({ position: 'absolute', bg: 'white' })}`}>
                        open
                    </div>
                ) : null}
            </div>
        )
    }

    return (
        <div className={`desktop-links ${css({ w: '100%' })}`}>
            <DesktopButton />
        </div>
    )
}
