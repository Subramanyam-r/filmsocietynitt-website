import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Pivot as Hamburger } from 'hamburger-react';
import $ from "jquery";

import "./Navbar.css";
export default function Navbar() {
    const location = useLocation();
    let isActive = location.pathname;
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        $(".navlink").on("click", () => setOpen(false))
    }, []);

    useEffect(() => {
        if(isOpen) window.$("#navbarText").collapse("show");
        else window.$("#navbarText").collapse("hide");
    }, [isOpen])
    
    return (
        <div className="navbar-master-div">
            <div className="navbar-main" style={{width: "100%"}}>
                <div className="text-right my-auto">
                    <div className="navbar navbar-expand-md navbar-dark py-0">
                        <div className=""><img className="fsoc-brand-logo" src="/images/fsoc-logo.png" alt="fsoc-brand-logo" /></div>
                        <button className="navbar-toggler ml-auto" aria-controls="navbarText" aria-expanded={isOpen} aria-label="Toggle navigation">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </button>

                        <div className="navbar-collapse collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto navbar-text-items text-left">
                                <li className="my-2 my-md-0"><Link className={"tcol-white navlink fw-500 " + (isActive === "/" ? "active" : "")} to="/">Home <span className="sr-only">(current)</span></Link></li>
                                <li className="mb-2 mb-md-0"><Link className={"tcol-white navlink fw-500 " + (isActive === "/originals" ? "active" : "")} to="/originals">Originals</Link></li>
                                <li className="mb-2 mb-md-0"><Link className={"tcol-white navlink fw-500 " + (isActive === "/offscreen" ? "active" : "")} to="/offscreen">Offscreen</Link></li>
                                <li className="mb-2 mb-md-0"><Link className={"tcol-white navlink fw-500 " + (isActive.startsWith("/video_essay") ? "active" : "")} to="/video_essays">Video Essays</Link></li>
                                <li className="mb-2 mb-md-0"><Link className={"tcol-white navlink fw-500 " + (isActive === "/members" ? "active" : "")} to="/members">Members</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
