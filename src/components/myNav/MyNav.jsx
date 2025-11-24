import './styles.css';

const MyNav = () => {
  return (
    <nav className="container-fluid p-3 bg-primary text-white">
      <div className="d-flex justify-content-between align-items-center">
        <h4>EpiBooks</h4>
        <div className="d-flex gap-5">
          <a href="#" className='navItem'>Home</a>
          <a href="#" className='navItem'>About</a>
          <a href="#" className='navItem'>Browse</a>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
