import "./styles.css";

const MyFooter = () => {
  return (
    <footer className="container-fluid bg-secondary p-3">
      <div className="p-2 d-flex justify-content-between w-100">
        <p className="footer-item">© 2024 EpiBooks. All rights reserved.</p>
        <div className="d-flex gap-4">
          <a href="#" className="footer-item">Take a look in store</a>
          <a href="#" className="footer-item">Contct us</a>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
