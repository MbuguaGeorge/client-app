import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Order from './components/Order/Main/order';
import Profile from './components/Dashboard/Profile/profile';
import Services from './components/Our services/Services';
import Pricing from './components/Pricing/Pricing';
import Manage from './components/Manage orders/Manage';
import Verify from './components/Auth/Verify/verify';
import EmailVerified from './components/Auth/Verify/email_verified';
import Review from './components/Dashboard/Review/review';
import Payment from './components/Payments/payment';
import Info from './components/Dashboard/Instructions/info';
import Success from './components/Payments/success';

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
        <Route exact path='/verify' element={<Verify />} />
        <Route exact path='/email-verified/:token' element={<EmailVerified />} />
        <Route exact path='/review' element={<Review />} />
        <Route exact path='/order/pay' element={<Payment />} />
        <Route exact path='/info/:id' element={<Info />} />
        <Route exact path='pay/success' element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App;