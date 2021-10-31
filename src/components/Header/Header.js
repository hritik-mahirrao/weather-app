import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  const { menuConfig } = props;

  return (
    <header>
      <h1>Weather App</h1>
      <div className="menu-container">
        <ul>
          {menuConfig.map((menu) => {
            const { label, link } = menu;
            return (
              <li key={label}>
                <Link to={link}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
