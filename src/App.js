import './App.css';
import NavBar from './NavBar'
import diamondLogo from "./Diamond.svg"
import headShot from "./portrait-young-handsome-hipster-man-600w-674194966.png"
import MacWindow from "./MacWindow";
import Intro from "./Intro";

function App() {
  return (
    <div style={{width: '100vw'}} className="App">
      <NavBar />
      <Intro />
      <div className={'flex-row bg-[#2E2F32] p-4'}>
        <MacWindow />
      </div>
    </div>
  );
}

export default App;
