import Resume from "../documents/ErtazaTanbirResume.pdf"
import CoverLetter from "../documents/ErtazaTanbirCoverLetter.pdf"

function Introduction(){

    return(
        <div className="introduction">
            <span className="span-box"><i className="fa-solid fa-star"></i> Introduction</span>
            <h1>Hi, I'm Ertaza Tanbir Frontend Developer | React Enthusiast</h1>
            <div className="intro-btn">
                <a href={Resume} download className="btn b1">Download Resume</a>
                <a href={CoverLetter} download className="btn b2">Download Cover Letter</a>
            </div>
            <div className="extra-intro">
                <div className="intro-box">
                    <h1>10+</h1>
                    <span>Personal Projects</span>
                </div>
                <div className="intro-box">
                    <h1>2+</h1>
                    <span>Year Learning & Building</span>
                </div>
                <div className="intro-box">
                    <h1>100+</h1>
                    <span>Problems Solved</span>
                </div>
            </div>
        </div>
    )
}

export default Introduction