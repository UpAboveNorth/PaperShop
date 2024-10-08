import "./Navbar.css";
import "./Dropdown.tsx";
import Dropdown from "./Dropdown.tsx";
import logo from "../Images/EconGameLogo.png";

// Navigation Bar at the top of the screen
const Navbar = () => {
  return (
    <div className="App">
      <nav
        className="navbar bg-primary"
        data-bs-theme="dark"
        style={{ height: "10vh" }}
      >
        <div className="container-fluid">
          <img
            // Displays the logo
            src={logo}
            style={{ width: "40vh", height: "auto", marginLeft: "25vh" }}
            alt="Econ Game Logo"
          />
          <Dropdown></Dropdown>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
