import React from 'react';
import Landing from "./Landing/Landing";
import OriginalWorks from "./OriginalWorks/OriginalWorks";
import Offscreen from './Offscreen/Offscreen';
import VideoEssays from "./VideoEssays/VideoEssays";
import HomeFooter from "./HomeFooter/HomeFooter";

import "./HomePage.css";
export default function HomePage({ db }) {
    return (
        <div>
            <Landing db={db} />
            <OriginalWorks db={db} />
            <Offscreen db={db} />
            <VideoEssays db={db} />
            <HomeFooter db={db} />
        </div>
    )
}
