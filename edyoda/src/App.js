import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <Content />
      </div>
    </div>
  );
}

export default App;
