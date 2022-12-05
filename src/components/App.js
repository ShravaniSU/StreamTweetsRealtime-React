import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import TweetFeed from "./TweetFeed";
import RuleList from "./RuleList";

class App extends React.Component {
    render() {
        return (
        <div className="ui container">
            <div className="introduction"></div>

            <h1 className="ui header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/225px-Twitter-logo.svg.png" alt="Twitter Logo" />
                <div className="content">
                    Real Time Tweet Streamer
                    <div className="sub header">Powered by Twitter data</div>
                </div>
            </h1>

            <div className="ui container">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<RuleList />} />
                    <Route exact path="/rules" element={<RuleList />} />
                    <Route exact path="/tweets" element={<TweetFeed />} />
                </Routes>
            </BrowserRouter>
            </div>
        </div>
        );
    }
}

export default App;