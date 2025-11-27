import "./styles.css";

const MyNav = ({ searchTitle, setSearchTitle, theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="container-fluid p-3 bg-primary text-white">
      <div className="d-flex justify-content-between align-items-center w-100">
        <h4>EpiBooks</h4>

        <div className="d-flex gap-4 align-items-center">
          <a href="#" className="navItem">
            Home
          </a>
          <a href="#" className="navItem">
            About
          </a>
          <a href="#" className="navItem">
            Browse
          </a>

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
