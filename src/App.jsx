import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyNav from "./components/myNav/MyNav.jsx";
import Welcome from "./components/welcome/Welcome.jsx";
import AllTheBooks from "./components/allTheBooks/AllTheBooks.jsx";
import CommentArea from "./components/commentArea/CommentArea.jsx";
import MyFooter from "./components/MyFooter/MyFooter.jsx";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [theme, setTheme] = useState("light");

  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <div className={theme === "light" ? "theme-light" : "theme-dark"}>
      <MyNav
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        theme={theme}
        setTheme={setTheme}
      />

      <Welcome />

      <Container fluid className="mt-4">
        <Row>
          <Col md={8}>
            <AllTheBooks
              searchTitle={searchTitle}
              setSelectedAsin={setSelectedAsin}
              selectedAsin={selectedAsin}
            />
          </Col>

          <Col md={4}>
            <div className={`comment-sidebar ${selectedAsin ? "visible" : ""}`}>
              {selectedAsin && <CommentArea asin={selectedAsin} />}
            </div>
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </div>
  );
}

export default App;
