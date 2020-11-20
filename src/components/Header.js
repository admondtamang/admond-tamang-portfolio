import React from "react";

export default function Header() {
  return (
    <header className="App__header l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#">Admond</a>
        </div>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">
                About
              </a>
            </li>
            <li class="nav__item">
              <a href="#skills" class="nav__link">
                Skills
              </a>
            </li>
            <li class="nav__item">
              <a href="#work" class="nav__link">
                Work
              </a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
