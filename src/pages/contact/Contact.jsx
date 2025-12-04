import React from "react";
import MyNav from "../../components/myNav/MyNav";
import MyFooter from "../../components/myFooter/MyFooter";
import { useState } from "react";

const Contact = () => {
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-center mt-4 mb-4">
            <h2>Work with us</h2>
            <p>
              If you have any questions, please do not hesitate to contact us.
              We are here to help and provide you with the information you need.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              className="w-100 secondaryImage"
              src="https://images2-milano.corriereobjects.it/methode_image/2017/07/17/Milano/Foto%20Milano%20-%20Trattate/8483005-kIqF-U43340833469304DlC-1224x916@Corriere-Web-Milano-593x443.jpg"
              alt="#"
            />
          </div>
          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Contact;
