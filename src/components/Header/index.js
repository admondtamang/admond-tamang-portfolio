import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a href="#" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="#Experiences">Experiences</a>
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
