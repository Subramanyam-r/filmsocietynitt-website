import React from 'react';
import OriginalWork from './OriginalWork/OriginalWork';

import "./OriginalWorks.css";

// function Founder({ img, name, ind }) {
//     return <div className="col-xl-2 col-lg-3 col-md-6 text-center mb-4" data-aos="fade-up" data-aos-delay={(ind+1)*50}>
//             <img src={img} alt={name} style={{width: "9rem", borderRadius: "50%", objectFit: "cover"}} />
//             <p className="fw-600 tcol-white mt-3">{name}</p>
//         </div>
// }

export default function OriginalWorks({ db }) {
    // let Founders = Object.values(db.Homepage.Founders);
    return (
        <div className="original-works-main-div">
            <h3 className="tcol-themeblue whatwedo" data-aos="fade-right">What do We do?</h3>
            <p className="tcol-white whatwedo-content" data-aos="fade-right">{db.Homepage.Landing.whatwedo}</p>

            <hr className="hr-pale my-4" />

            {/* <h3 className="tcol-themeblue module-heading mb-5" data-aos="fade-up">FOUNDERS</h3> */}
            {/* <div className="row mx-0">{Founders.map((f, i) => <Founder key={i} img={f.img} name={f.name} ind={i} />)}</div> */}
            {/* <hr className="hr-pale my-4" /> */}

            <h3 className="tcol-themeblue module-heading mb-5" data-aos="fade-up">ORIGINAL WORKS</h3>

            <div className="row">
                <OriginalWork ow={db.Homepage.OriginalWorks["1"]} />
                <OriginalWork ow={db.Homepage.OriginalWorks["2"]} />
                <OriginalWork ow={db.Homepage.OriginalWorks["3"]} />
            </div>
        </div>
    )
}
