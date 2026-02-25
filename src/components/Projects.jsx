function Projects() {
  return (
    <section className="projects" id="project">
      <span className="span-box">
        <i className="fa-solid fa-star"></i> Projects
      </span>
      <h1>My Featured Projects</h1>
      <div className="project-demo">
        <div className="project">
            <img src="https://images.pexels.com/photos/36091465/pexels-photo-36091465.jpeg" />
            <h3>Ecommerce website</h3>
          <div className="buttons">
            <a href="#">
              <button className="btn b1">View</button>
            </a>
            <a href="#">
                <button className="btn b2">Source</button>
            </a>
          </div>
          <div className="mobile-info">
            <p>
              A responsive frontend Ecommerce web application built to provide a
              seamless online shopping experience created using :
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <ul className="feature">
              <li><span>&#10004;</span> Product Listing Page (PLP)</li>
              <li><span>&#10004;</span> Product Details Page (PDP)</li>
              <li><span>&#10004;</span> Shopping Cart</li>
              <li><span>&#10004;</span> User Authentication UI</li>
            </ul>
          </div>
        </div>
        <div className="project">
            <img src="https://images.pexels.com/photos/36091465/pexels-photo-36091465.jpeg" />
            <h3>Ecommerce website</h3>
          <div className="buttons">
            <a href="#">
              <button className="btn b1">View</button>
            </a>
            <a href="#">
                <button className="btn b2">Source</button>
            </a>
          </div>
          <div className="mobile-info">
            <p>
              A responsive frontend Ecommerce web application built to provide a
              seamless online shopping experience created using :
            </p>
            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <ul className="feature">
              <li><span>&#10004;</span> Product Listing Page (PLP)</li>
              <li><span>&#10004;</span> Product Details Page (PDP)</li>
              <li><span>&#10004;</span> Shopping Cart</li>
              <li><span>&#10004;</span> User Authentication UI</li>
            </ul>
          </div>
        </div>
      </div>
      </section>
  );
}

export default Projects;
