import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyNav from "../myNav/MyNav";
import Welcome from "../welcome/Welcome";
import AllTheBooks from "../allTheBooks/AllTheBooks";
import CommentArea from "../commentArea/CommentArea";
import MyFooter from "../myFooter/MyFooter";

const MainLayout = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [theme, setTheme] = useState("light");

  const [selectedAsin, setSelectedAsin] = useState(null);
  return (
    <div>
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
            <Col sm={8} md={8} xl={9}>
              <AllTheBooks
                searchTitle={searchTitle}
                setSelectedAsin={setSelectedAsin}
                selectedAsin={selectedAsin}
              />
            </Col>

            <Col sm={4} md={4} xl={3}>
              <div
                className={`comment-sidebar ${selectedAsin ? "visible" : ""}`}
              >
                {selectedAsin && <CommentArea asin={selectedAsin} />}
              </div>
            </Col>
          </Row>
        </Container>

        <MyFooter />
      </div>
    </div>
  );
};

export default MainLayout;
