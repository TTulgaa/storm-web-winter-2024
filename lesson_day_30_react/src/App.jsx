import People from "./components/people"
import { Scientists, Chemist, Physicist, Mathematician, Astrophysicist} from "./components/Mathematicians"
import { Button, AlertButton } from "./components/Buttons"
import Toolbar from "./components/Toolbar";
import PlayButton from "./components/PlayButtons";
function App() {

  function search(e){
      if(e.key==="Enter"){
        console.log("hello");

        alert("qwer");
  }}
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl">Lesson day 30</h1>
        <input type="text" id="inp" onKeyPress={search} className="border-black border-solid border-2"/>
        <People/>
        <Scientists/>
        <Mathematician/>
        <Chemist/>
        <Physicist/>
        <Astrophysicist/>
        <Button/>
        <AlertButton message="hello world">Click me</AlertButton>
        <PlayButton movieName="tt">play</PlayButton>
      </div>

    </>
  )
}


export default App
