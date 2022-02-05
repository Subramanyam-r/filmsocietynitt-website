import React from 'react'

import "./ComingSoon.css";
export default function ComingSoon({ ind }) {
    return (
        <div className="video-essay-card-holder-col text-center col-xl-4 col-md-6 mb-5">
            <div className="video-essay-card" style={{height: "26rem"}} data-aos="fade-up" data-aos-delay={ind*100}>
                <div className="bg-themeblue position-relative" style={{height: "56.25%", overflow: "hidden", marginBottom: "4rem", zIndex: 1}}>
                    <img className="mb-3" style={{opacity: "0.4"}} src="/images/film-vectors.png" alt="film-vectors" />
                </div>
                <img className="fireflies-bg" src="/images/fireflies-bg.svg" alt="fireflies-bg" style={{left: 0, top: 10}} />
                <h3 className='tcol-themeblue fw-700 my-auto' style={{fontSize: "2.3rem"}}>COMING SOON!</h3>
            </div>
        </div>
    )
}
