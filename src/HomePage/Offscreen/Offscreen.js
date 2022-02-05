import React from 'react';
import Speaker from "./Speaker/Speaker";

import "./Offscreen.css";
export default function Offscreen({ db }) {
    let speakers = db.Homepage.Offscreen.Speakers;
    return (
        <div className="offscreen-main-div">
            <h3 className="tcol-themeblue module-heading mb-4" data-aos="fade-up">OFFSCREEN</h3>
            <p className="offscreen-description-p mb-5" data-aos="fade-right">{db.Homepage.Offscreen.description}</p>

            <div className="row">
                <Speaker speaker={speakers["1"]} />
                <Speaker speaker={speakers["2"]} />
                <Speaker speaker={speakers["3"]} />
            </div>
        </div>
    )
}
