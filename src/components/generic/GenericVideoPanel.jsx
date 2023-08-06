// Libraries
import React, { useEffect, useRef, useState } from "react";

// Panda CSS
import { css } from '../../../styled-system/css';
import BannerDesktop from '../../../public/video/banner-desktop.mp4'
import BannerMobile from '../../../public/video/banner-mobile.mp4'
export default function GenericVideoPanel({ link, size, padding, mobileImage, desktopImage, alt }) {
    const video = useRef(null);

    const videoReady = () => {
        video.current.classList.remove('opacity_0');
    }

    const getSize = (size) => {
        switch (size) {
            case "sm":
                return css({ h: '32', xs: { h: '40' }, sm: { h: '56' }, lg: { h: '64' }, xl: { h: '72' }, '2xl': { h: 'auto' } });
            case "md":
                return css({ h: '40', xs: { h: '56' }, sm: { h: '72' }, lg: { h: '80' }, xl: { h: '96' }, '2xl': { h: 'auto' } });
            case "lg":
                return css({ h: '64', xs: { h: '72' }, sm: { h: '96' }, lg: { h: '120' }, xl: { h: '160' }, '2xl': { h: 'auto' } });
            default:
                return css({ h: '64', xs: { h: '72' }, sm: { h: '96' }, lg: { h: '120' }, xl: { h: '200' }, '2xl': { h: 'auto' } });
        }
    }

    const getPadding = (padding) => {
        switch (padding) {
            case "none":
                return css({ p: '0' });
            case "sm":
                return css({ p: '4', xs: { p: '6' }, lg: { p: '8' } });
            case "md":
                return css({ p: '6', xs: { p: '8' }, lg: { p: '10' }, xl: { p: '12' } });
            case "lg":
                return css({ p: '8', xs: { p: '12' }, lg: { p: '16' }, xl: { p: '24' } });
            default:
                return css({ p: '4', xs: { p: '6' }, lg: { p: '8' } });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            video.current.src = link;
        }, 2000);
    }, []);

    return (
        <section className={`generic-video-panel ${css({ w: '100%' })} ${getPadding(padding)}`}>
            <div className={`video-wrapper ${css({ w: '100%', position: 'relative' })} ${getSize(size)}`}>
                <picture>
                    <source media="(min-width: 1440px)" srcSet={desktopImage} />
                    <source media="(min-width: 799px)" srcSet={mobileImage} />
                    <img className={`image-fallback ${css({ w: '100%', h: '100%', objectFit: 'cover', objectPosition: 'center' })}`} src={mobileImage} alt={alt} />
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
        </section>
    );
}
