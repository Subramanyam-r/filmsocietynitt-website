import React from 'react';
import { Link } from "react-router-dom"

import "./VideoEssay.css";
export default function VideoEssay({ ve, ind }) {
    return (
        <div className="video-essay-card-holder-col text-center col-xl-4 col-md-6 mb-5">

            <Link to={"/video_essay/" + ve.route} style={{textDecoration: "none"}}>
                <div className="video-essay-card" data-aos="fade-up" data-aos-delay={ind*100}>
                    <div style={{minHeight: "56.25%"}}>
                        <img className="mb-3 videoessaycard-thumbnail position-relative" src={ve.thumbnail} alt={ve.title} style={{zIndex: 1}} />
                    </div>

                    <div className="px-4">
                        <img className="fireflies-bg" src="/images/fireflies-bg.svg" alt="fireflies-bg" style={{left: 0, top: 10}} />
                        <h3 className="tcol-themeblue fw-700">{ve.title}</h3>
                        <p className="tcol-white text-left video-essay-card-p">{ve.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
