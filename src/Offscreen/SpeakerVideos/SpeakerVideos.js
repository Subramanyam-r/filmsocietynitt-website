import React from 'react';
import OffscreenVideo from './OffscreenVideo/OffscreenVideo';

import "./SpeakerVideos.css";
export default function SpeakerVideos({ sv }) {

    return (
        <div className="offscreen-speaker-videos-main-div position-relative">
            <h2 className="tcol-themeblue text-center fw-700 mb-3" data-aos="fade-up">{sv.speaker}</h2>
            <p className="offscreen-speaker-videos-description-p mb-5 tcol-white" data-aos="fade-up">{sv.description}</p>

            <div className="row">
                {sv.videos.map(v => <OffscreenVideo key={v} link={v} />)}
            </div>
        </div>
    )
}
