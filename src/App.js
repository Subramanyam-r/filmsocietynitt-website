import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Navbar from './Partials/Navbar/Navbar';
import "./Firebase/Init";
import firebase from "firebase/app";
import Loading from "./Loading/Loading";
import Originals from './Originals/Originals';
import Offscreen from "./Offscreen/Offscreen";
import VideoEssays from './VideoEssays/VideoEssays';
import VideoEssay from "./VideoEssay/VideoEssay";
import Members from "./Members/Members";

export default function App() {

    let [db, setdb] = useState(null);
    let [load, setLoad] = useState(false);

    useEffect(() => {
        firebase.database().ref("/").on("value", snapshot => {
            setdb(snapshot.val());
            setTimeout(() => {
                setLoad(true);
                Aos.init();
            }, 0);
        });
    }, []);
    
    return (
        <>
            {!load && <Loading />}
            {db && <Router>
                <Navbar />
                <Route exact path='/' render={(props) => ( <HomePage {...props} db={db} />)} />
                <Route exact path='/originals' render={(props) => ( <Originals {...props} db={db} />)} />
                <Route exact path='/offscreen' render={(props) => ( <Offscreen {...props} db={db} />)} />
                <Route exact path='/video_essays' render={(props) => ( <VideoEssays {...props} db={db} />)} />
                <Route path='/video_essay' render={(props) => ( <VideoEssay {...props} db={db} />)} />
                <Route path='/members' render={(props) => ( <Members {...props} db={db} />)} />
            </Router> }
        </>
    );
}
