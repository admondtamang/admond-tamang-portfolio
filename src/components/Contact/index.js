import React from "react";
import "./contact.css";
import bg from "../../assets/contact.png";
import "boxicons";
export default function Contact() {
    return (
        <div id="Contact">
            <h1 className="heading">Contact Me</h1>
            <div className="glass">
                <img src={bg} alt="contact" />
                <div className="getInTouch">
                    <h4>Get in touch</h4>
                    <p>
                        If you have any quries feel free to get in touch with
                        any social account mentioned below.
                    </p>
                    <div className="social_icons">
                        <a href="https://www.linkedin.com/in/admond-tamang-78a39a134/">
                            <box-icon
                                type="logo"
                                name="linkedin-square"
                                color="white"
                            />
                        </a>
                        <a href="https://www.facebook.com/admond.tamang.3">
                            <box-icon
                                type="logo"
                                name="facebook-square"
                                color="white"
                            />
                        </a>
                        <a href="https://dribbble.com/admond">
                            <box-icon
                                type="logo"
                                name="dribbble"
                                color="white"
                            />
                        </a>
                        <a href="https://github.com/admondtamang">
                            <box-icon type="logo" name="github" color="white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
