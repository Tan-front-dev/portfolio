import { useState,useEffect } from "react";


function Vertical() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setActive(entry.target.id)
        }
      })
    },{
      rootMargin:"0px",
      threshold:0.5
    })

    const sections = document.querySelectorAll("section")

    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.observe(section))
    }
  },[])


  return (
    <div className="vertical-menu">
      <a href="#home" className={active === "home" ? "active" : ""}>
        <i className="fa-regular fa-house"></i>
      </a>
      <a href="#project" className={active === "project" ? "active" : ""}>
        <i className="fa-solid fa-briefcase"></i>
      </a>
      <a href="#about" className={active === "about" ? "active" : ""}>
        <i className="fa-regular fa-user"></i>
      </a>
      <a href="#services" className={active === "services" ? "active" : ""}>
        <i className="fa-solid fa-gear"></i>
      </a>
      <a href="#resume" className={active === "resume" ? "active" : ""}>
        <i className="fa-regular fa-file-lines"></i>
      </a>
      {/* <a href="#reviews" className={active === "reviews" ? "active" : ""}>
        <i className="fa-regular fa-message"></i>
      </a> */}
      <a href="#contact" className={active === "contact" ? "active" : ""}>
        <i className="fa-regular fa-envelope"></i>
      </a>
    </div>
  );
}









export default Vertical;
