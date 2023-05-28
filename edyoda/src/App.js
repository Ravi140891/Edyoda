import "./App.css";
import Content from "./components/Content";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <Content />
        <Form />
      </div>
    </div>
  );
}

export default App;
