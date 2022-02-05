import React from 'react';
import VideoEssayCard from './VideoEssayCard/VideoEssayCard';

import "./VideoEssays.css";
export default function VideoEssays({ db }) {
    let videoEssays = db.VideoEssays;
    return (
        <div className="video-essays-main-div">
            <h3 className="tcol-themeblue module-heading mb-4" data-aos="fade-right">VIDEO ESSAYS</h3>
            <p className="offscreen-description-p mb-5" data-aos="fade-right">{videoEssays.description}</p>

            <div className="row">
                <VideoEssayCard ve={db.VideoEssays[String(videoEssays.length - 1)]} />
                <VideoEssayCard ve={db.VideoEssays[String(videoEssays.length - 2)]} />
                {videoEssays.length - 3 > 0 && <VideoEssayCard ve={db.VideoEssays[String(videoEssays.length - 3)]} />}
            </div>
        </div>
    )
}
