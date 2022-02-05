import React from 'react'

export default function VideoEssayCard({ ve }) {
    return (
        <a className="col-xl-4 original-work-card-col" href={"/video_essay/" + ve.route} target="_blank" rel="noreferrer" data-aos="fade-up">
            <div className="original-work-div tcol-white mx-auto">
                <img className="original-work-card-thumbnail mb-2 position-relative" src={ve.thumbnail} alt={ve.title} />
                <div className="original-work-content-holder">
                    <img className="fireflies-bg" src="/images/fireflies-bg.svg" alt="fireflies-bg" style={{top: "6rem"}} />
                    <h3 className="tcol-themeblue fw-700">{ve.title}</h3>
                    <p className="original-work-description-p">{ve.description.slice(0, 160) + "..."}</p>
                    <div className="row">
                        <div className="col-4 fw-700 text-center"><i className="fas fa-eye tcol-themeblue mr-2"></i>{ve.views}</div>
                        <div className="col-4 fw-700 text-center"><i className="fas fa-thumbs-up tcol-themeblue mr-2"></i>{ve.likes}</div>
                        {/* <div className="col-4 fw-700 text-center"><i className="fas fa-calendar-minus tcol-themeblue mr-2"></i>{}</div> */}
                    </div>
                </div>
            </div>
        </a>
    )
}
