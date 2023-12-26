import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/login_component'
import SignUp from './components/signup_component'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/menu" exact element={<Menu/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/sign-in"  element={<Login />} />
          <Route path="/sign-up"  element={<SignUp />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
