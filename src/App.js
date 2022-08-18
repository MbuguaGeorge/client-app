import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Order from './components/Order/Main/order';
import Profile from './components/Dashboard/Profile/profile';
import Services from './components/Our services/Services';
import Pricing from './components/Pricing/Pricing';
import Manage from './components/Manage orders/Manage';

function App(){
  return(
    //<Header />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/order' element={<Order/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/pricing' element={<Pricing />} />
        <Route exact path='/manage' element={<Manage />} />
      </Routes>
    </Router>
  )
}

export default App;