import avatar from "../assets/avatar.jpg";
import { useState, useEffect, useRef } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  function openMenu() {
    setMenu(true);
  }

  function closeMenu() {
    setMenu(false);
  }

  const [isVisibility, setIsVisibility] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisibility(true);
      } else {
        setIsVisibility(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => window.removeEventListener("mousedown", handleOutSideClick);
  }, []);

  return (
    <section className="parent-header" id="home">
      <div className="menu-logo" onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav>
        <div className={`inside-menu ${menu ? "active" : ""}`} ref={menuRef}>
          <div className="menu-head">
            <h3>Menu</h3>
            <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
          </div>
          <div className="menu-options">
            <a href="#home">
              <i className="fa-regular fa-house"></i>
              Home
            </a>
            <a href="#project">
              <i className="fa-solid fa-briefcase"></i>
              Projects
            </a>
            <a href="#about">
              <i className="fa-regular fa-user"></i>
              About
            </a>
            <a href="#services">
              <i className="fa-solid fa-gear"></i>
              Services
            </a>
            <a href="#resume">
              <i className="fa-regular fa-file-lines"></i>
              Resume
            </a>
            {/* <a href="#reviews">
                <i className="fa-regular fa-message"></i>
                Reviews
              </a> */}
            <a href="#contact">
              <i className="fa-regular fa-envelope"></i>
              Contact
            </a>
          </div>
          <div className="socials">
            <h4>Socials</h4>
            <div className="links menu">
              <li>
                <a href="https://github.com/Tan-front-dev" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ertaza-tanbir-5645673b0/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="mailto:ertazatanbir@gmail.com" target="_blank">
                  <i className="fa-solid fa-at"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ertaza.tanbir"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div className="header">
        <div className="info">
          <div className="name">
            <h2>TANBIR</h2>
          </div>
          <div className="role">
            <h4>Frontend Developer</h4>
          </div>
        </div>
        <div className="header-image">
          <img src={avatar} />
        </div>
        <div className="extra-info">
          <h6>Specialization:</h6>
          <h3>Frontend Developer | React Enthusiast</h3>
          <h6>Based in:</h6>
          <h3>Sherpur Upazila, Rajshahi, Bangladesh (Open to Remote Work)</h3>
        </div>
        <div className="links">
          <li>
            <a href="https://github.com/Tan-front-dev" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ertaza-tanbir-5645673b0/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="mailto:ertazatanbir@gmail.com" target="_blank">
              <i className="fa-solid fa-at"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ertaza.tanbir" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
        </div>
        <button className="btn b1 w-100">Let's Work!</button>
        {isVisibility && (
          <button className="top-btn" onClick={scrollToTop}>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        )}
      </div>
    </section>
  );
}

export default Header;
