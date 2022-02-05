import React from 'react'

export default function OffscreenVideo({ link }) {
    return (
        <div className="col-xl-4 mb-xl-0 mb-5">
            <div className="embed-responsive embed-responsive-16by9 offscreen-page-video-div" data-aos="fade-up">
                <iframe loading="lazy" title={link} className="embed-responsive-item" src={"https://www.youtube.com/embed/" + link + "?rel=0"} allowFullScreen></iframe>
            </div>
        </div>
    )
}
