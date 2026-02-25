import css from "../assets/css3.svg"
import html from "../assets/html.svg"
import git from "../assets/git.svg"
import github from "../assets/github.svg"
import vite from "../assets/vite.svg"
import devtools from "../assets/devtools.svg"
import react from "../assets/react.svg"
import javascript from "../assets/javascript.svg"

function Tool(){

    return(
        <div className="tools">
            <h2>My Favorite Tools</h2>
            <div className="tool-box">
            <div className="tool">
                <img src={html}/>
                <span>HTML</span>
            </div>
            <div className="tool">
                <img src={css}/>
                <span>CSS</span>
            </div>
            <div className="tool">
                <img src={javascript}/>
                <span>JavaScript</span>
            </div>
            <div className="tool">
                <img src={react}/>
                <span>React</span>
            </div>
            <div className="tool">
                <img src={git}/>
                <span>Git</span>
            </div>
            <div className="tool">
                <img src={github}/>
                <span>Github</span>
            </div>
            <div className="tool">
                <img src={vite}/>
                <span>Vite</span>
            </div>
            <div className="tool">
                <img src={devtools}/>
                <span>Devtools</span>
            </div>
            </div>
        </div>
    )
}


export default Tool