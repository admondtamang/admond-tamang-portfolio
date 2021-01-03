import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
    return (
        <div className="App">
            <div className="App__frontPage" id="Home">
                <Header />
                <Profile />
                <div className="seeMore">
                    <a href="#About"> More about me</a>
                </div>
            </div>
            <About />
            <Skills />
            <Experience />
            <Contact />
        </div>
    );
}

export default App;
