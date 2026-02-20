import p1 from "../assets/project-ph-1.jpeg"
import p2 from "../assets/project-ph-2.jpeg"
import p3 from "../assets/project-ph-3.jpeg"
import p4 from "../assets/project-ph-4.jpeg"

function Projects(){

    return(
        <div className="projects" id="project">
            <span className="span-box"><i className="fa-solid fa-star"></i> Projects</span>
            <h1>My Featured Projects</h1>
            <div className="projects-demo">
                <div className="project">
                    <div className="project-image">
                        <img src={p1}/>
                    </div>
                    <div className="project-detail">
                        <span className="detail">API</span>
                        <span className="detail">Development</span>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src={p2}/>
                    </div>
                    <div className="project-detail">
                        <span className="detail">API</span>
                        <span className="detail">Development</span>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src={p3}/>
                    </div>
                    <div className="project-detail">
                        <span className="detail">API</span>
                        <span className="detail">Development</span>
                    </div>
                </div>
                <div className="project">
                    <div className="project-image">
                        <img src={p4}/>
                    </div>
                    <div className="project-detail">
                        <span className="detail">API</span>
                        <span className="detail">Development</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects