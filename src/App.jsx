import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav/MyNav.jsx";
import Welcome from "./components/welcome/Welcome.jsx";
import AllTheBooks from "./components/allTheBooks/AllTheBooks.jsx";
import MyFooter from "./components/MyFooter/MyFooter.jsx";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <MyNav
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        theme={theme}
        setTheme={setTheme}
      />

      <Welcome />
      <AllTheBooks searchTitle={searchTitle} />
      <MyFooter />
    </div>
  );
}

export default App;
