import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
