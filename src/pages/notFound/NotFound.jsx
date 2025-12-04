import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-1">404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <Link to="/" className="btn btn-info">
            Back to Home
          </Link>
          <img
            className="w-100"
            src="https://static.vecteezy.com/ti/vettori-gratis/p1/8516025-qualcosa-e-andato-storto-appartamento-illustrazione-concetto-vettoriale.jpg"
            alt="#"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
