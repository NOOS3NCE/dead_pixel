import './App.css';
import NavBar from './NavBar'
import diamondLogo from "./Diamond.svg"
import headShot from "./portrait-young-handsome-hipster-man-600w-674194966.png"
import MacWindow from "./MacWindow";
import Intro from "./Intro";
import {useRef} from "react";
import Contact from "./Contact";

function App() {
    const titleRef = useRef()
    const homeRef = useRef()
    const contactRef = useRef()

    function handleBackClick() {
        titleRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"})
    }
    function handleHomeClick() {
        homeRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"})
    }
    function handleContactClick() {
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"})
    }
  return (
    <div style={{width: '100vw'}} className="App">
      <NavBar projectsCallback={handleBackClick} homeCallback={handleHomeClick} contactCallback={handleContactClick} />
      <Intro innerRef={homeRef} contactCallback={handleContactClick} />
      <div id={'macWindow'} className={'flex-row bg-[#2E2F32] p-4'}>
        <MacWindow innerRef={titleRef} />
      </div>
        <div id={'contactPage'} className={'flex-row bg-[#2E2F32] p-4'}>
            <Contact innerRef={contactRef}/>
        </div>
    </div>
  );
}

export default App;
