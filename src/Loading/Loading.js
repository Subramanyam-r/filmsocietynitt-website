import React from 'react'

import "./Loading.css";
export default function Loading() {
    return (
        <div className="loading-screen-main-div">
            <div className="loading-screen-svg"><img src="/images/loading.svg" alt="loadingbg" /></div>

            <img className="loading-page-fsoc-logo" src="/images/fsoc-logo.png" alt="fsoc-logo" />
        </div>
    )
}
