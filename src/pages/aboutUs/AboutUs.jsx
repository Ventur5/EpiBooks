import React from "react";
import MyNav from "../../components/myNav/MyNav";
import MyFooter from "../../components/myFooter/MyFooter";
import { useState } from "react";

const AboutUs = () => {
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
      <div className="container mt-4 mb-4">
        <div className="row d-flex align-items-center">
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
            <img
              className="w-100 secondaryImage"
              src="https://www.workitdaily.com/media-library/happy-employees-on-a-successful-team.jpg?id=30117495&width=2000&height=1500&coordinates=50%2C0%2C50%2C0"
              alt="#"
            />
          </div>
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
            <h3>Team Working</h3>
            <p>
              Our team is composed of dedicated professionals committed to
              delivering excellence and innovation in every project. With
              diverse skills and expertise, we collaborate seamlessly to
              overcome challenges and exceed client expectations.
            </p>
          </div>
        </div>
        <div className="row d-flex align-items-center mt-4">
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide exceptional services and solutions to
              our clients, ensuring their satisfaction and success in every
              project we undertake.
            </p>
          </div>
          <div className="col-6 col-md-6 col-lg-6 col-xl-6">
            <img
              className="w-100 secondaryImage"
              src="https://www.marazzi.it/app/uploads/2021/11/import_blog_slider-nuova-sede-produttiva-e-nuovi-uffici-di-mozzanica-osnago-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-5">
            <h2>All of us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, culpa delectus sint dicta necessitatibus aspernatur
              illum et facere, quidem magnam debitis, voluptatem atque dolorem
              dolorum corporis maiores! Accusamus, iste sapiente.
            </p>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default AboutUs;
