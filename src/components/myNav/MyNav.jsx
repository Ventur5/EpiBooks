import "./styles.css";
import { Link } from "react-router-dom";

const MyNav = ({ searchTitle, setSearchTitle, theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="container-fluid p-3 bg-primary text-white">
      <div className="d-flex justify-content-between align-items-center w-100">
        <h4>EpiBooks</h4>

        <div className="d-flex gap-4 align-items-center">
          <Link to="/" className="navItem">
            Home
          </Link>
          <Link to="/contact" className="navItem">
            Contact
          </Link>
          <Link to="/aboutus" className="navItem">
            About Us
          </Link>

          <input
            type="text"
            className="form-control"
            style={{ width: "200px" }}
            placeholder="Search..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />

          <button className="btn btn-light" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
