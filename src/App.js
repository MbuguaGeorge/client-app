import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './components/Home/home';
import Order from './components/Order/Main/order';
import Profile from './components/Dashboard/Profile/profile';
import Services from './components/Our services/Services';
import Manage from './components/Manage orders/Manage';
import Verify from './components/Auth/Verify/verify';
import EmailVerified from './components/Auth/Verify/email_verified';
import Review from './components/Dashboard/Review/review';
import Payment from './components/Payments/payment';
import Info from './components/Dashboard/Instructions/info';
import Success from './components/Payments/success';
import Invalid from './components/Payments/invalid';
import MyProfile from './components/Dashboard/myProfile/myprofile';
import Home from './components/Pages/home';

import Log from './components/Auth/logIn/log';
import Register from './components/Auth/Signup/register';
import EmailVerifyLogin from './components/Auth/Verify/email_verify_login';

import SideBar from './components/Dashboard/Header/sidebar';

function App(){
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/order' element={<Order/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/manage' element={<Manage />} />
        <Route exact path='/verify' element={<Verify />} />
        <Route exact path='/email-verified/:token' element={<EmailVerified />} />
        <Route exact path='/review' element={<Review />} />
        <Route exact path='/order/pay/:id' element={<Payment />} />
        <Route exact path='/info/:id' element={<Info />} />
        <Route exact path='pay/success' element={<Success />} />
        <Route exact path='pay/invalid' element={<Invalid />} />
        <Route exact path='/myprofile' element={<MyProfile />} />

        <Route exact path='/log' element={<Log />} />
        <Route exact path='/register' element={<Register />} />

        <Route exact path='/verified/:token' element={<EmailVerifyLogin />} />

        <Route exact path='/dashboard/orders' element={<SideBar />} />

      </Routes>
    </Router>
  )
}

export default App;