import React, { useEffect, useState } from 'react';
import { useLocation, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import firebase from "firebase/app";

import "./VideoEssay.css";
export default function VideoEssay({ db }) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cookies = new Cookies();

    let dbVideoEssays = Object.values(db.VideoEssays);
    let location = useLocation();
    let videoRoute = location.pathname.replace("/video_essay/", "");
    let thisVideoEssay = dbVideoEssays.find(ve => ve.route === videoRoute);
    let [isLiked, setIsLiked] = useState(false);

    function handleLikesChange() {
        let likesDbRef = firebase.database().ref("VideoEssays/" + String(dbVideoEssays.findIndex(ve => ve.route === videoRoute)) + "/likes");
        if(isLiked) {
            cookies.remove('liked', { path: '/video_essay/' + videoRoute });
            setIsLiked(false);
            likesDbRef.set(thisVideoEssay.likes - 1);
        } else {
            cookies.set('liked', true , { path: '/video_essay/' + videoRoute });
            setIsLiked(true);
            likesDbRef.set(thisVideoEssay.likes + 1);
        }
    }

    useEffect(() => {
        console.log(cookies.get('liked'))
        setIsLiked(cookies.get('liked'));// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoRoute]);

    useEffect(() => {
        let viewsDbRef = firebase.database().ref("VideoEssays/" + String(dbVideoEssays.findIndex(ve => ve.route === videoRoute)) + "/views");
        viewsDbRef.set(thisVideoEssay.views + 1);// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(thisVideoEssay) return (
        <div className="video-essay-individual-main-div">
            <img className="originals-page-animo-bg" src="/images/homepagebg.svg" alt="background-animo" data-aos="zoom-out" />

            <div style={{position: "relative"}} className="mb-3">
                <h3 className="tcol-themeblue fw-700 text-center mb-4">{thisVideoEssay.title.toUpperCase()}</h3>
                <hr className="hr-pale mb-4" />
                <video width="100%" controls>
                    <source src={thisVideoEssay.link} />
                </video>
            </div>

            <div style={{position: "relative"}}>
                <div className="row">
                    <div className="col-6">
                        <p className="tcol-white fw-500 video-player-description"><span className="tcol-themeblue fw-700">Views: </span>{thisVideoEssay.views}</p>
                    </div>

                    <div className="col-6 text-right">
                        <p className="tcol-white fw-500 video-player-description mr-2">
                            <i type="button" className={"fa-thumbs-up like-button tcol-themeblue mr-2 " + (isLiked ? "fas" : "far")} onClick={handleLikesChange}></i> 
                            {thisVideoEssay.likes} Likes
                        </p>
                    </div>
                </div>
                <p className="tcol-white fw-500 video-player-description"><span className="tcol-themeblue fw-700">Description: </span>{thisVideoEssay.description}</p>
            </div>

        </div>
    ); else return <Redirect to="/video_essays" />;
}
