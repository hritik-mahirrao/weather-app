import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

// Style
import "./App.scss";

function App() {
  const menuConfig = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="App">
      <Router>
        <Header menuConfig={menuConfig} />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
