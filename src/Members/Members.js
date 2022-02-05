import React from 'react'
import MemberCard from "./MemberCard/MemberCard";

import "./Members.css";
export default function Members({ db }) {
    let Members = db.Members;
    let membersDisplay = [];
    let yearTraverse = [ "2018-2022", "2019-2023", "2020-2024", "Alumni" ];
    let roleTraverse = [ "Head", "Actor", "Writer", "Editor", "Music", "Cinematographer", "Director" ];

    Members && yearTraverse.forEach(year => {
        Members[year] && roleTraverse.forEach(role => {
            if(Members[year][role]) {
                let arr = Object.values(Members[year][role]);
                membersDisplay = membersDisplay.concat(arr);
            }
        });
    });

    return (
        <div className="members-page-main-div position-relative">
            <img className="homepage-anim-bg position-fixed" src="/images/homepagebg.svg" alt="anim-bg" style={{top: 0, left: 0, height: "55rem", position: 'fixed'}} />
            <h2 className="fw-700 text-center tcol-themeblue position-relative mt-n4" data-aos="fade-up">OUR TEAM</h2>
            <hr className="hr-pale mb-5" />
            <div className="row">
                {membersDisplay.map((m, i) => <MemberCard key={m.name + m.role + m.year} member={m} ind={i} />)}
            </div>
        </div>
    )
}