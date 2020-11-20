import React from "react";
import HomeImg from "../assets/img/perfil.png";
import AboutImg from "../assets/img/about.jpg";
import SkillImg from "../assets/img/skill.jpg";
import Work1Img from "../assets/img/work1.jpg";
import Work2Img from "../assets/img/work2.jpg";
import Work3Img from "../assets/img/work3.jpg";
import Work4Img from "../assets/img/work4.jpg";
import Work5Img from "../assets/img/work5.JPG";
import IosImg from "../assets/img/ios.JPG";

export default function Home() {
  return (
    <main className="App__Home">
      <section className="home bd-grid" id="home">
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title-color">Admond</span>
            <br />
            Web developer
          </h1>

          <a href="#" className="button">
            Contact
          </a>
        </div>

        <div className="home__social">
          <a
            href="https://www.linkedin.com/in/admond-tamang-78a39a134/"
            className="home__social-icon"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://dribbble.com/admond" className="home__social-icon">
            <i className="bx bxl-dribbble"></i>
          </a>
          <a
            href="https://github.com/admondtamang"
            className="home__social-icon"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <div className="home__img">
          <img src={HomeImg} alt="Profile" />
        </div>
      </section>

      {/* <!--===== ABOUT =====--> */}
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div className="about__img">
            <img src={AboutImg} loading="lazy" alt="" />
          </div>

          <div>
            <h2 className="about__subtitle">I'am Admond</h2>
            <p className="about__text">
              I don’t like to define myself by the work I’ve done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I prefer to keep learning, continue challenging
              myself, and do interesting things that matter.
            </p>
          </div>
        </div>
      </section>

      {/* <!--===== SKILLS =====--> */}
      <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Profesional Skills</h2>
            <p className="skills__text">
              A full stack developer, passionate about learning new
              technologies.
            </p>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-html5 skills__icon"></i>
                <span className="skills__name">Web</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bx-mobile skills__icon"></i>
                <span className="skills__name">Mobile - React and android</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">75%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxl-javascript skills__icon"></i>
                <span className="skills__name">Node Js & GraphQL</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">65%</span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__names">
                <i className="bx bxs-paint skills__icon"></i>
                <span className="skills__name">UX/UI</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>
          </div>

          <div>
            <img src={SkillImg} alt="" className="skills__img" />
          </div>
        </div>
      </section>

      {/* <!--===== WORK =====--> */}
      <section className="work section" id="work">
        <h2 className="section-title">Projects</h2>

        <div className="work__container bd-grid">
          <div className="work__img">
            <a href="https://agitated-meninsky-8348ba.netlify.app/">
              <img
                src={Work1Img}
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>Facebook Clone - React with Firebase</p>
            </a>
          </div>
          <div className="work__img">
            <a href="https://youthful-mcnulty-615081.netlify.app/">
              <img
                src={Work2Img}
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>Scool Management - MERN stack</p>
            </a>
          </div>
          <div className="work__img">
            <a href="https://determined-euler-b8db9f.netlify.app/">
              <img
                src={Work5Img}
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>ACS -static website</p>
            </a>
          </div>
          <div className="work__img">
            <a href="https://dribbble.com/admond">
              <img
                src="https://miro.medium.com/max/3840/1*x8wGMNfuh1e5Ew6k0aF_iQ.png"
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>UI/UX design - dribbble</p>
            </a>
          </div>

          <div className="work__img">
            <a href="https://github.com/softwarica-github/t3-frontend-admondtamang">
              <img
                src={Work4Img}
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>Hoey - the music app (MERN stack)</p>
            </a>
          </div>

          <div className="work__img">
            <a href="https://drive.google.com/file/d/1KI_Zyn-tGj0BVJH4YYiybE7qmIKyx2RS/view?usp=sharing">
              <img
                src="https://atlas-content-cdn.pixelsquid.com/stock-images/coronavirus-cartoon-qvG66r8-600.jpg"
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>Covid-19 info (Nepal) - React Native</p>
            </a>
          </div>

          <div className="work__img">
            <a href="https://github.com/admondtamang/farmershop">
              <img
                src={Work3Img}
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>Farmershop - React Native</p>
            </a>
          </div>

          <div className="work__img">
            <a href="https://5fae96b8717edc45514f59cf--tender-swartz-eae88e.netlify.app/">
              <img
                src="https://cdn.dribbble.com/users/2754493/screenshots/14527338/media/df69b6297fb2e89f289e7e9bf1a9d92d.png"
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>Samachar (News website) - Beta</p>
            </a>
          </div>

          <div className="work__img">
            <a href="https://zen-engelbart-2de07e.netlify.app/">
              <img
                src={IosImg}
                loading="lazy"
                alt=""
                height="400"
                style={{ height: "250px" }}
              />
              <p>Ios web - apple Os on web</p>
            </a>
          </div>
        </div>
      </section>

      {/* <!--===== CONTACT =====--> */}
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="contact__container bd-grid">
          <form action="" className="contact__form">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
            <textarea
              name=""
              id=""
              cols="0"
              rows="10"
              className="contact__input"
            ></textarea>
            <input
              type="button"
              value="Submit"
              className="contact__button button"
            />
          </form>
        </div>
      </section>
    </main>
  );
}
