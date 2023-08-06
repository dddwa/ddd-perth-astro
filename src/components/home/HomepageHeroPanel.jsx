// Libraries
import React, { useEffect, useRef, useState } from "react";

// Panda CSS
import { css } from '../../../styled-system/css';

// Assets
import BannerMobile from '../../../public/video/banner-mobile.mp4'
import BannerDesktop from '../../../public/video/banner-desktop.mp4'

export default function HomepageHeroPanel() {
    const video = useRef(null);
    const [width, setWidth] = useState(0);
    const [currentDevice, setCurrentDevice] = useState('');

    const videoReady = () => {
        video.current.classList.remove('opacity_0');
    }

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        function updateVideoSrc() {
            if (width >= 768) {
                if (currentDevice !== 'desktop') {
                    video.current.src = BannerDesktop;
                }
                setCurrentDevice('desktop');
            } else {
                if (currentDevice !== 'mobile') {
                    video.current.src = BannerMobile;
                }
                setCurrentDevice('mobile');
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()
        updateVideoSrc()

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    });

    return (
        <div className={`homepage-hero-panel ${css({ w: '100%' })}`}>
            <div className={`video-wrapper ${css({ w: '100%', position: 'relative', h: '64', xs: { h: '72' }, sm: { h: '96' }, lg: { h: '120' }, xl: { h: '160' }, '2xl': { h: 'auto' } })}`}>
                <picture>
                    <source media="(min-width: 1440px)" srcSet={`https://files.simonds.com.au/assets/MainSimondsWebsite/Homepage/Fallbacks/yufxcqmTA6PmGs67IbwTf2T2EQdIVBSpJkFrxaaa.jpg`} />
                    <source media="(min-width: 799px)" srcSet={`https://files.simonds.com.au/assets/MainSimondsWebsite/Homepage/Fallbacks/YaFDmfb5ndTtIlYXLLntk6WEhibpKRcotZCWeypm.jpg`} />
                    <img className={`image-fallback ${css({ w: '100%', h: '100%', objectFit: 'cover', objectPosition: 'center' })}`} src={`https://files.simonds.com.au/assets/MainSimondsWebsite/Homepage/Fallbacks/XPp4g5zjRpgOJQjHREcsDNXNxk4YWxU7YhG4t5co.jpg`} alt={`A photo of three people sitting at a cafe table.`} />
                </picture>
                <video
                    className={`${css({ w: '100%', h: '100%', position: 'absolute', inset: '0', objectFit: 'cover', objectPosition: 'center', zIndex: '2', transition: 'opacity', transitionDuration: '1000', opacity: '0' })}`}
                    ref={video}
                    onLoadedData={videoReady}
                    width="100%"
                    height="100%"
                    muted
                    loop
                    playsInline
                    autoPlay={true}
                >
                    <p>Your browser cannot play the provided video file.</p>
                </video>
            </div>
        </div>
    );
}
