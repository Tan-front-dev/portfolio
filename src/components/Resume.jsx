function Resume(){
    
    return(
        <section className="resume" id="resume">
            <span className="span-box"><i className="fa-solid fa-star"></i> Resume</span>
            <h1>Education And Practical Experience</h1>
            <p>I am a self-motivated developer currently pursuing a B.Sc. (Honours) in Physics while actively building my skills in modern web development.</p>
            <div className="qualifications">
            <div className="education">
                <h2>Education</h2>

                <div className="education-box">
                    <span className="e-year">2024 – Present</span>
                    <h4 className="e-course">B.Sc. (Honours) in Physics – <span className="number">2</span>nd Year</h4>
                    <p className="e-institute">Course by <strong>Govt. Shah Sultan College</strong></p>
                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore laborum minima.</p> */}
                    </div>

                {/* <div className="education-box">
                    <span className="e-year">2021 - 2022</span>
                    <h4 className="e-course">Frontend Development Bootcamp</h4>
                    <p className="e-institute">Course by <strong>Online Course</strong></p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore laborum minima.</p>
                    </div>

                <div className="education-box">
                    <span className="e-year">2023</span>
                    <h4 className="e-course">Advanced UI/UX Design Course</h4>
                    <p className="e-institute">Course by <strong>Design Code</strong></p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore laborum minima.</p>
                    </div> */}
            </div>
            <div className="work">
            <h2 className="w-exp">Work Experience</h2>
                        <div className="education-box">
                    <span className="e-year">2024 - Present</span>
                    <h4 className="e-course">Frontend Developer (Self Projects)</h4>
                    {/* <p className="e-institute">Course by <strong>Pixel Studio</strong></p> */}
                    <p>Developed multiple responsive web applications using React and modern JavaScript.</p>
                    </div>

                {/* <div className="education-box">
                    <span className="e-year">2022 - Present</span>
                    <h4 className="e-course">UI Engineer</h4>
                    <p className="e-institute">Course by <strong>Remote Work</strong></p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolore laborum minima.</p>
                    </div> */}
                    </div>
             </div>
        </section>
    )
}

export default Resume