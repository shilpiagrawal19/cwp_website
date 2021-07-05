import Home from "./components/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Try from "./components/Try";
import Tab from "./components/tab/Tab";

AOS.init();
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
