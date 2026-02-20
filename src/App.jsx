import './App.css'
import Header from "./components/header.jsx"
import Introduction from './components/Introduction.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Resume from './components/Resume.jsx'
import Tool from './components/Tool.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import VerticalMenu from './components/VerticalMenu.jsx'

function App() {
  return(
    <>
    <div className="body">
    <div>
    <Header/>
    </div>
    <div className="main">
    <Introduction/>
    <Projects/>
    <About/>
    <Services/>
    <Resume/>
    <Tool/>
    <Reviews/>
    <Contact/>
    </div>
    <div>
    <VerticalMenu/>
    </div>
    </div>
    </>
  )
}

export default App