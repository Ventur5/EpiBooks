import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/myNav/MyNav.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import AllTheBooks from './components/allTheBooks/AllTheBooks.jsx';
import MyFooter from './components/MyFooter/MyFooter.jsx';

function App() {

  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  )
}

export default App
