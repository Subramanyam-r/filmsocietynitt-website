import React, { useEffect, useState } from 'react';
import $ from "jquery";
import moment from "moment";

import "./OriginalWork.css";
export default function OriginalWork({ ow }) {
    let [stats, setStats] = useState(null);

    let ytapikey = process.env.REACT_APP_YOUTUBE_API_KEY;
    let thumbnailLink = "https://img.youtube.com/vi/" + ow.id + "/hqdefault.jpg";
    let statsLink = "https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=" + ow.id + "&key=" + ytapikey;

    useEffect(() => {
        $.ajax({
            type: "GET",
            contentType: "json",
            url: statsLink,
            success: (res) => {
                setStats(res.items[0]);
            }
        });
    }, [setStats, statsLink]);

    return (
        <a className="col-xl-4 original-work-card-col" href={"https://www.youtube.com/watch?v=" + ow.id} target="_blank" rel="noreferrer" data-aos="fade-up">
            <div className="original-work-div tcol-white mx-auto">
                <img className="original-work-card-thumbnail mb-2 position-relative" src={thumbnailLink} alt={ow.title} />
                <div className="original-work-content-holder">
                    <img className="fireflies-bg" src="/images/fireflies-bg.svg" alt="fireflies-bg" style={{top: "6rem"}} />
                    <h3 className="tcol-themeblue fw-700">{ow.title}</h3>
                    <p className="original-work-description-p">{ow.description}</p>
                    <div className="row">
                        <div className="col-4 fw-700 text-center"><i className="fas fa-eye tcol-themeblue mr-2"></i>{stats ? stats.statistics.viewCount : ""}</div>
                        <div className="col-4 fw-700 text-center"><i className="fas fa-thumbs-up tcol-themeblue mr-2"></i>{stats ? stats.statistics.likeCount : ""}</div>
                        <div className="col-4 fw-700 text-center"><i className="fas fa-calendar-minus tcol-themeblue mr-2"></i>{moment(stats ? stats.snippet.publishedAt : "").format("YYYY")}</div>
                    </div>
                </div>
            </div>
        </a>
    )
}
