import React from 'react';
import VideoEssay from './VideoEssay/VideoEssay';
import ComingSoon from './ComingSoon/ComingSoon';

import "./VideoEssays.css";
export default function VideoEssays({ db }) {
    let videoEssays = db.VideoEssays;
    return (
        <div className="video-essays-page-main-div">
            <img className="originals-page-animo-bg" src="/images/homepagebg.svg" alt="background-animo" data-aos="zoom-out" />
            <h2 className="tcol-themeblue video-essays-page-title text-center fw-900" data-aos="fade-up">VIDEO ESSAYS</h2>
            <hr className="hr-pale mb-5" />
            
            <div className="row">
                {videoEssays.map((ves, i) => <VideoEssay key={ves.route} ve={ves} ind={i} />)}
                <ComingSoon ind={videoEssays.length} />
            </div>
        </div>
    )
}
