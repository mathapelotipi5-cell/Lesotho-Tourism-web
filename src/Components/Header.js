import React, { useEffect, useState } from "react";

function Header({ onNavigate, currentPath = "/" }) {
  const [activeNav, setActiveNav] = useState(currentPath);

  useEffect(() => {
    setActiveNav(currentPath);
  }, [currentPath]);

  const handleNavClick = (event, path) => {
    event.preventDefault();
    setActiveNav(path);

    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (onNavigate) {
        onNavigate("/" + path);
      }
    } else if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <header className="site-header">
      <a
        className="brand"
        href="/"
        onClick={(e) => handleNavClick(e, "/")}
        aria-label="Lesotho Kingdom in the Sky home"
      >
        <span className="brand-mark">L</span>
        <span>
          LESOTHO <small>KINGDOM IN THE SKY</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        <a
          href="/"
          className={activeNav === "/" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "/")}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "#about")}
        >
          The Kingdom
        </a>
        <a
          href="#destinations"
          className={activeNav === "#destinations" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "#destinations")}
        >
          Places
        </a>
        <a
          href="/attractions"
          className={activeNav === "/attractions" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "/attractions")}
        >
          Attractions
        </a>
        <a
          href="#enquiry"
          className={activeNav === "#enquiry" ? "header-cta active" : "header-cta"}
          onClick={(e) => handleNavClick(e, "#enquiry")}
        >
          Plan your visit
        </a>
      </nav>
    </header>
  );
}

export default Header;