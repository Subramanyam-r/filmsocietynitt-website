import React from 'react'

import "./Landing.css";
export default function Landing() {

    return (
        <div className="landing-div-main position-relative">
            <img src="/images/home-page-topleft.svg" className="landing-topleft" alt="vector" data-aos="fade-down" />
            <img src="/images/home-page-bottomright.svg" className="landing-bottomright" alt="vector" data-aos="fade-up" data-aos-anchor=".landing-topleft" data-aos-anchor-placement="top-bottom" />
            <img className="homepage-anim-bg" src="/images/homepagebg.svg" alt="anim-bg" />

            <div className="row mx-0">
                <div className="col-xl-7 landing-left-div">
                    <h1 className="landing-h1" data-aos="fade-up" data-aos-anchor=".landing-topleft">Film Society</h1>
                    <h2 className="landing-h2" data-aos="fade-up" data-aos-anchor=".landing-topleft">NIT Trichy</h2>

                    <h4 className="landing-h4" data-aos="fade-up" data-aos-anchor=".landing-topleft">The Official Filmmaking club of NIT Trichy</h4>
                    <a data-aos="fade-right" href="https://www.youtube.com/c/FilmSocietyofNITTrichy/" target="_blank" rel="noreferrer" className="btn landing-btn mr-4" data-aos-anchor=".landing-topleft">Youtube <i className="fab fa-youtube"></i></a>
                    <a data-aos="fade-right" href="https://www.instagram.com/filmsocietynitt/" target="_blank" rel="noreferrer" className="btn landing-btn" data-aos-anchor=".landing-topleft">Instagram <i className="fab fa-instagram"></i></a>
                </div>

                <div className="col-xl-5 text-center">
                    <img src="/images/fsoc-clapboard.svg" className="landing-clapboard" alt="clapboard" data-aos="fade-left" />
                </div>
            </div>
        </div>
    )
}
