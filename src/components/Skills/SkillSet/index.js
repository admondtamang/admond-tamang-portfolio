import React from "react";
import "./skillset.css";
import "boxicons";
export default function SkillSet({ name, percentage, icon }) {
    return (
        <div class="skills__data">
            <div class="skills__names">
                {icon}
                <span class="skills__name">{name}</span>
            </div>
            <div
                class="skills__bar skills__html"
                style={{ width: percentage }}
            ></div>
            <div>
                <span class="skills__percentage">{percentage}</span>
            </div>
        </div>
    );
}
