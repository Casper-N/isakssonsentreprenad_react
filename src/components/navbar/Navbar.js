import { useEffect, useState } from "react";
import { Navlink } from "./Navlink";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const sections = ["home", "about", "services", "machinefleet", "contact"];

  const handleScroll = () => {
    const scrollPos = window.scrollY + 275;

    let currSection = activeLink;
    sections.forEach((sec, idx) => {
      const elem = document.getElementById(sec);
      if (elem && elem.offsetTop <= scrollPos) currSection = idx;
    });

    setActiveLink(currSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="navbar fixed-top navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="images/logo_navbar.png" alt="" width="100" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Navlink
              text="Hem"
              href="home"
              active={activeLink === 0}
              onClick={() => setActiveLink(0)}
            />
            <Navlink
              text="Om mig"
              href="about"
              active={activeLink === 1}
              onClick={() => setActiveLink(1)}
            />
            <Navlink
              text="Tjänster"
              href="services"
              active={activeLink === 2}
              onClick={() => setActiveLink(2)}
            />
            <Navlink
              text="Maskinpark"
              href="machinefleet"
              active={activeLink === 3}
              onClick={() => setActiveLink(3)}
            />
            <Navlink
              text="Kontakt"
              href="contact"
              active={activeLink === 4}
              onClick={() => setActiveLink(4)}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};
