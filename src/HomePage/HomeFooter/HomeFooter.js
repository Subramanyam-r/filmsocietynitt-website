import React from 'react'
import { Link } from 'react-router-dom';

import "./HomeFooter.css";
export default function HomeFooter({ db }) {
    let { email, email1 } = db.Homepage.Footer;
    return (
        <div className="home-footer-main-div text-center">
            <img className="fsoc-footer-logo" src="/images/fsoc-logo.png" alt="fsoc-logo" data-aos="fade-up" />
            <p className="footer-p mb-5" data-aos="fade-left">The Official Filmmaking club of NIT Trichy</p>

            <div className="mb-4">
                <a data-aos="fade-up" href="https://www.instagram.com/filmsocietynitt/" target="_blank" rel="noreferrer"><img className="footer-social-media mr-4" src="/images/insta.svg" alt="insta" /></a>
                <a data-aos="fade-up" href="https://www.youtube.com/c/FilmSocietyofNITTrichy/" target="_blank" rel="noreferrer"><img className="footer-social-media mr-4" src="/images/yt.svg" alt="yt" /></a>
                <a data-aos="fade-up" href="https://www.facebook.com/filmsocietynitt/" target="_blank" rel="noreferrer"><img className="footer-social-media mr-4" src="/images/fb.svg" alt="fb" /></a>
                <a data-aos="fade-up" href="https://letterboxd.com/filmsociety_nit/" target="_blank" rel="noreferrer"><img className="footer-social-media" src="/images/letterboxd.svg" alt="letterboxd" /></a>
            </div>

            <div className="mb-5" data-aos="fade-right">
                <Link to={"/originals"} className="tcol-themeblue footer-navlink">Originals</Link>
                <i className="fas fa-circle footer-dot-separator mb-2 mx-sm-3 mx-2"></i>
                <Link to={"/offscreen"} className="tcol-themeblue footer-navlink">Offscreen</Link>
                <i className="fas fa-circle footer-dot-separator mb-2 mx-sm-3 mx-2"></i>
                <Link to={"/video_essays"} className="tcol-themeblue footer-navlink">Video Essays</Link>
            </div>

            <div className="mb-4 footer-contact text-center" data-aos="fade-up">
                <a href={"mailto:" + email} className="footer-contact-anchor">
                    <i className="fas fa-envelope tcol-themeblue mr-2"></i>
                    <span className="tcol-pale">{email}</span>
                </a>
                <span className="tcol-themeblue mx-2 d-none d-sm-inline"> | </span> 

                <a href={"mailto:" + email1} className="footer-contact-anchor">
                <i className="fas fa-envelope tcol-themeblue mr-2"></i>
                    <span className="tcol-pale">{email1}</span>
                </a>
            </div>

            <hr className="hr-pale my-5" />
            <p className="tcol-pale footer-end" data-aos="fade-left" data-aos-anchor=".footer-contact">We Love Films!</p>
        </div>
    )
}
