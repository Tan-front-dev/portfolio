import { useState } from "react";

function VerticalMenu() {

  const [active, setActive] = useState("home")

  function handleClick(section){
    setActive(section)
  }

  return (
    <div className="vertical-menu">
      <a href="#home" className={active === "home" ? "active" : ""} onClick={() => handleClick("home")}>
        <i className="fa-regular fa-house"></i>
      </a>
      <a href="#project" className={active === "project" ? "active" : ""} onClick={() => handleClick("project")}>
        <i className="fa-solid fa-briefcase"></i>
      </a>
      <a href="#about" className={active === "about" ? "active" : ""} onClick={() => handleClick("about")}>
        <i className="fa-regular fa-user"></i>
      </a>
      <a href="#services" className={active === "services" ? "active" : ""} onClick={() => handleClick("services")}>
        <i className="fa-solid fa-gear"></i>
      </a>
      <a href="#resume" className={active === "resume" ? "active" : ""} onClick={() => handleClick("resume")}>
        <i className="fa-regular fa-file-lines"></i>
      </a>
      <a href="#reviews" className={active === "reviews" ? "active" : ""} onClick={() => handleClick("reviews")}>
        <i className="fa-regular fa-message"></i>
      </a>
      <a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => handleClick("contact")}>
        <i className="fa-regular fa-envelope"></i>
      </a>
    </div>
  );
}

export default VerticalMenu;
