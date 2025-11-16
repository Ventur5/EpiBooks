import "./styles.css";

const MyFooter = () => {
  return (
    <footer className="container-fluid bg-secondary p-3">
      <div className="container d-flex justify-content-between">
        <p>© 2024 EpiBooks. All rights reserved.</p>
        <div className="d-flex gap-4">
          <a href="#">Take a look in store</a>
          <a href="#">Contct us</a>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
