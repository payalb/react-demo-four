import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
        <Nav list= {["Home", "Articles", "About", "Contact Us"]} />
    </div>
  );
}

export default App;
