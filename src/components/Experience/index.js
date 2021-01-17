import React from "react";
import Work1Img from "../../assets/img/work1.jpg";
import Work2Img from "../../assets/img/work2.jpg";
import Work3Img from "../../assets/img/work3.jpg";
import Work4Img from "../../assets/img/work4.jpg";
import Work5Img from "../../assets/img/work5.jpg";
import IosImg from "../../assets/img/ios.jpg";
import "./experience.css";
export default function Experience() {
    return (
        <div id="experiences">
            <h3 className="heading">Experiences</h3>
            <div className="work__container ">
                <div className="work__img">
                    <a href="https://optimistic-hodgkin-15a17e.netlify.app/">
                        <img src="dashboard.png" loading="lazy" alt="" />
                        <p>Feather Dashboard (UI only) - React Js</p>
                    </a>
                </div>

                <div className="work__img">
                    <a href="https://5fae96b8717edc45514f59cf--tender-swartz-eae88e.netlify.app/">
                        <img
                            src="https://cdn.dribbble.com/users/2754493/screenshots/14527338/media/df69b6297fb2e89f289e7e9bf1a9d92d.png"
                            loading="lazy"
                            alt=""
                        />
                        <p>Samachar (News website) - Beta</p>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://agitated-meninsky-8348ba.netlify.app/">
                        <img src={Work1Img} loading="lazy" alt="" />
                        <p>Facebook Clone - React with Firebase</p>
                    </a>
                    Clone
                </div>
                <div className="work__img">
                    <a href="https://youthful-mcnulty-615081.netlify.app/">
                        <img src={Work2Img} loading="lazy" alt="" />
                        <p>Scool Management - MERN stack</p>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://determined-euler-b8db9f.netlify.app/">
                        <img src={Work5Img} loading="lazy" alt="" />
                        <p>ACS -static website</p>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://dribbble.com/admond">
                        <img
                            src="https://miro.medium.com/max/3840/1*x8wGMNfuh1e5Ew6k0aF_iQ.png"
                            loading="lazy"
                            alt=""
                        />
                        <p>UI/UX design - dribbble</p>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/softwarica-github/t3-frontend-admondtamang">
                        <img src={Work4Img} loading="lazy" alt="" />
                        <p>Hoey - the music app (MERN stack)</p>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://drive.google.com/file/d/1KI_Zyn-tGj0BVJH4YYiybE7qmIKyx2RS/view?usp=sharing">
                        <img
                            src="https://atlas-content-cdn.pixelsquid.com/stock-images/coronavirus-cartoon-qvG66r8-600.jpg"
                            loading="lazy"
                            alt=""
                        />
                        <p>Covid-19 info (Nepal) - React Native</p>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://github.com/admondtamang/farmershop">
                        <img src={Work3Img} loading="lazy" alt="" />
                        <p>Farmershop - React Native</p>
                    </a>
                </div>
                <div className="work__img">
                    <a href="https://zen-engelbart-2de07e.netlify.app/">
                        <img src={IosImg} loading="lazy" alt="" />
                        <p>Ios web - apple Os on web</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
