import React, { useState } from 'react';
import SpeakerVideos from './SpeakerVideos/SpeakerVideos';
import InfiniteScroll from 'react-infinite-scroller';

import "./Offscreen.css";
export default function Offscreen({ db }) {
    let speakerVideos = Object.values(db.Offscreen);
    let [loadingIndices, setLoadingIndices] = useState([0, 0]);

    return (
        <div className="offscreen-page-main-div">
            <div className="position-relative offscreen-landing-div">
                <img className="originals-page-animo-bg" src="/images/homepagebg.svg" alt="background-animo" data-aos="zoom-out" /> 
                <img className="offscreen-topright-vector" src="/images/offscreen-vectors.png" alt="offscreen-topright-vector" data-aos="fade-down" />
                <img className="offscreen-bottomleft-vector" src="/images/offscreen-vectors-i.png" alt="offscreen-bottomleft-vector" data-aos="fade-up" data-aos-anchor=".offscreen-topright-vector" />

                <div className="offscreen-title-holder">
                    <h3 className="tcol-white offscreen-title-offscreen" data-aos="fade-right" data-aos-anchor=".offscreen-topright-vector">Offscreen</h3>
                    <h5 className="tcol-themeblue offscreen-title-masterclass" data-aos="fade-left" data-aos-anchor=".offscreen-topright-vector">A Masterclass Series</h5>
                </div>
            </div>

            <div className="offscreen-interviews-main-div pt-5">
            <p className="tcol-white offscreen-page-description position-relative">{db.Homepage.Offscreen.description}</p>
            <InfiniteScroll
                pageStart={0}
                hasMore={loadingIndices[1] !== speakerVideos.length}
                initialLoad={false}
                loadMore={() => {
                    if(loadingIndices[1] + 1 < speakerVideos.length) {
                        setLoadingIndices(old => {
                            old[1] += 1;
                            return [...old];
                        });
                    } else {
                        setLoadingIndices(old => {
                            old[1] += speakerVideos.length;
                            return [...old];
                        });
                    }
                }}
            >
                {speakerVideos.slice(loadingIndices[0], loadingIndices[1]).map(sv => <SpeakerVideos key={sv.speaker} sv={sv} />)}
            </InfiniteScroll>

            </div>
        </div>
    )
}
