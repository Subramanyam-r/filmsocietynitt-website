import React, { useEffect, useState } from 'react';
import $ from "jquery";
import OriginalWorkEmbed from './OriginalWorkEmbed/OriginalWorkEmbed';
import InfiniteScroll from 'react-infinite-scroller';

import "./Originals.css";
export default function Originals({ db }) {
    let playListId = db.Originals.playlist_id;
    let videoIdsURL = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=" + playListId + "&key=" + process.env.REACT_APP_YOUTUBE_API_KEY;
    let [videoIds, setVideoIds] = useState([]);
    let [loadingIndices, setLoadingIndices] = useState([0, 3]);

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: videoIdsURL,
            contentType: "json",
            success: (res) => {
                setVideoIds(res.items.map(i => i.snippet.resourceId.videoId));
            }
        });
    }, [videoIdsURL]);
    
    return (
        <div className="originals-page-main-div">
            <img className="originals-page-animo-bg" src="/images/homepagebg.svg" alt="background-animo" data-aos="zoom-out" />
            <h3 className="tcol-themeblue module-heading mb-4" data-aos="fade-up">ORIGINALS</h3>
            <p className="tcol-white position-relative" data-aos="fade-up" style={{fontSize: "1.1rem"}}>{db.Originals.description}</p>
            
            <InfiniteScroll
                pageStart={0}
                hasMore={loadingIndices[1] !== videoIds.length}
                initialLoad={false}
                loadMore={() => {
                    if(loadingIndices[1] + 3 < videoIds.length) {
                        setLoadingIndices(old => {
                            old[1] += 3;
                            return [...old];
                        });
                    } else {
                        setLoadingIndices(old => {
                            old[1] += videoIds.length;
                            return [...old];
                        });
                    }
                }}
            >
                {videoIds.slice(loadingIndices[0], loadingIndices[1]).map(vid => <OriginalWorkEmbed key={vid} id={vid} />)}
            </InfiniteScroll>

            {/* {videoIds.map(vid => <OriginalWorkEmbed key={vid} id={vid} />)} */}
        </div>
    )
}
