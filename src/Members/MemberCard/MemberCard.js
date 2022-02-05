import React, { useEffect } from 'react';
import $ from "jquery";

export default function MemberCard({ member, ind }) {
    let mainDivId = (member.name.split(" ").join("-") + "-" + member.year + "-" + member.role).toLowerCase();
    let descId = mainDivId + "-description-div";

    useEffect(() => {
        $("#" + mainDivId).on("mouseover", () => {
            $("#" + descId).css("transform", "translateY(0)");
        });

        $("#" + mainDivId).on("mouseout", () => {
            $("#" + descId).css("transform", "translateY(100%)");
        });// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 px-4 mb-4">
            <div id={mainDivId} className="membercard-main" data-aos="fade-up" data-aos-delay={ind*100}>
                <img className="fireflies-bg" src="/images/fireflies-bg.svg" alt="fireflies-bg" />
                <div className="bg-themeblue membercard-blue-banner" style={{overflow: "hidden"}}>
                    <img src="/images/film-vectors.png" alt="film-vectors" style={{width: "100%", opacity: 0.25}} />
                </div>
                <img className="membercard-pfp" src={member.profile_pic} alt={member.name} />

                <div className="membercard-content-holder position-relative">
                    <p className="membercard-name tcol-themeblue mb-0">{member.name}</p>
                    <p className="membercard-role">{member.role}</p>
                </div>

                <div id={descId} className="description-animo-div">
                    <div className="row">
                        <div className="col-6"><p className="tcol-themeblue fw-900 mb-2">{member.department}</p></div>
                        <div className="col-6 text-right"><p className="tcol-themeblue fw-900 mb-2">{member.year}</p></div>
                    </div>
                    <p className="membercard-animocard-description">{member.description}</p>
                </div>
            </div>
        </div>
    )
}
