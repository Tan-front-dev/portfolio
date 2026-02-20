import css from "../assets/css3.svg"
import express from "../assets/expressjs.svg"
import figma from "../assets/figma.svg"
import javascript from "../assets/javascript.svg"
import mongodb from "../assets/mongodb.svg"
import nodejs from "../assets/nodejs.svg"
import react from "../assets/react.svg"
import tailwindcss from "../assets/tailwindcss.svg"

function Tool(){

    return(
        <div className="tools">
            <h2>My Favorite Tools</h2>
            <div className="tool-box">
            <div className="tool">
                <img src={figma}/>
                <span>Figma</span>
            </div>
            <div className="tool">
                <img src={css}/>
                <span>CSS</span>
            </div>
            <div className="tool">
                <img src={tailwindcss}/>
                <span>Tailwind CSS</span>
            </div>
            <div className="tool">
                <img src={react}/>
                <span>React</span>
            </div>
            <div className="tool">
                <img src={javascript}/>
                <span>JavaScript</span>
            </div>
            <div className="tool">
                <img src={nodejs}/>
                <span>Node.js</span>
            </div>
            <div className="tool">
                <img src={express}/>
                <span>Express.js</span>
            </div>
            <div className="tool">
                <img src={mongodb}/>
                <span>Mongodb</span>
            </div>
            </div>
        </div>
    )
}

export default Tool