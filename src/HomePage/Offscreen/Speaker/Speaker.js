import React from 'react';

import "./Speaker.css";
export default function Speaker({ speaker }) {
    return (
        <div className="col-xl-4 my-4">
            <div className="speaker-holder text-center" data-aos="fade-up">
                <img className="offscreen-speaker-img" src={speaker.imageLink} alt={speaker.name} />
                <h3 className="offscreen-speaker-name">{speaker.name}</h3>
                <p className="offscreen-speaker-role tcol-themeblue">{speaker.role}</p>
            </div>
        </div>
    )
}
