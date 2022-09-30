import "./Navigation.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { useState } from "react";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <nav>
        <Logo className="logo" />
        <div className="nav-toggle" onClick={toggleNavHandler}>
          <div className="nav-toggle-icon"></div>
          <div className="nav-toggle-icon"></div>
          <div className="nav-toggle-icon"></div>
        </div>

        <div
          className="nav-links-background"
          style={{ visibility: navOpen && "visible" }}
        >
          <ul className="nav-links-container">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul className="nav-links-container">
            <li>Login</li>
            <button className="sign-up-btn">Sign Up</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
