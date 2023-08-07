// Libraries
import React, { useEffect, useRef, useState } from "react";

// Panda CSS
import { css } from '../../../styled-system/css';

// Assets
import BannerMobile from '../../video/banner-mobile.mp4'
import BannerDesktop from '../../video/banner-desktop.mp4'

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
            <div className={`video-wrapper ${css({ bg: 'black', w: '100%', position: 'relative', h: '64', xs: { h: '72' }, sm: { h: '96' }, lg: { h: '120' }, xl: { h: '160' }, '2xl': { h: '40rem' }, '3xl': { h: '42rem' }, '4xl': { h: '45rem' }, '5xl': { h: '50rem' } })}`}>
                {/* Use this if you need an image fallback for first frame of video */}
                {/*<picture>*/}
                {/*    <source media="(min-width: 1440px)" srcSet={``} />*/}
                {/*    <source media="(min-width: 799px)" srcSet={``} />*/}
                {/*    <img className={`image-fallback ${css({ w: '100%', h: '100%', objectFit: 'cover', objectPosition: 'center' })}`} src={``} alt={``} />*/}
                {/*</picture>*/}
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
