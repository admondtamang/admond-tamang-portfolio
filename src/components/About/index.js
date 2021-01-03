import React from "react";
import "./about.css";
import about from "../../assets/img/about.jpg";
export default function About() {
    return (
        <div id="About">
            <h2 className="heading">About Me</h2>
            <div className="about">
                <img src={about} alt="admond" />
                <div className="about__detail">
                    <h3>I'am Admond</h3>
                    <p>
                        I don’t like to define myself by the work I’ve done. I
                        define myself by the work I want to do. Skills can be
                        taught, personality is inherent. I prefer to keep
                        learning, continue challenging myself, and do
                        interesting things that matter.
                    </p>
                </div>
            </div>
        </div>
    );
}
