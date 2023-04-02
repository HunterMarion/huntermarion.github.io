import './App.scss';
import "./fonts/lulo-clean-one.ttf";
import Home from '../src/pages/Home';
import Checkout from '../src/pages/Checkout';
import Catering from '../src/pages/Catering';
import Reservations from '../src/pages/Reservations';
import About from '../src/pages/About';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js';
import {
     BrowserRouter as Router,
     Routes,
     Route   } from "react-router-dom";

function App() {
  return (
     <div className="App">
          <Header/>
               <Router>
                    <Routes>
                         <Route exact path="/"  element={<Home />}/>
                         <Route exact path="/reservations" element={<Reservations />}/>
                         <Route exact path="/catering" element={<Catering />} />
                         <Route exact path="/about"  element={<About />}/>
                         <Route exact path="/checkout" element={<Checkout />} />
                    </Routes>
               </Router>
          <Footer/>
     </div>
         
     );
}

export default App;
