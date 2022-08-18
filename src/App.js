import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Our services/Services';
import Pricing from './components/Pricing/Pricing';
import Manage from './components/Manage orders/Manage';
import Order from './components/Order now/Order';
// import Login from './components/logIn/Login';
// import SignUp from './components/Signup/SignUp';



function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/pricing' element={<Pricing />} />
          <Route exact path='/manage' element={<Manage />} />
          <Route exact path='/order' element={<Order /> } />
          {/* <Route exact path='/login' element={<Login />}/> */}
          {/* <Route exact path='/signup' element={<SignUp />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
