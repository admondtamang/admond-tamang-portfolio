import React from "react";
import "./skillset.css";
import "boxicons";
export default function SkillSet({ name, percentage, icon }) {
    return (
        <div className="skills__data">
            <div className="skills__names">
                {icon}
                <span className="skills__name">{name}</span>
            </div>
            <div
                className="skills__bar skills__html"
                style={{ width: percentage }}
            ></div>
            <div>
                <span className="skills__percentage">{percentage}</span>
            </div>
        </div>
    );
}
