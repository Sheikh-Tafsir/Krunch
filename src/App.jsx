import React from 'react'
import {Routes, Route, Link, BrowserRouter, useNavigate} from "react-router-dom";
import { Navbar } from 'react-bootstrap';

import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Service from "./pages/Service"
import Notfound from "./pages/Notfound"
import Headernavbar from './pages/Headernavbar';
import Forgetpass from './pages/Forgetpass';
import Dashboard from './pages/Dashboard';
import Heromain from './pages/Heromain';
import Review from './pages/Review';
import Footer from './pages/Footer';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import Fastfood from './pages/Fastfood';
import Setmenu from './pages/Setmenu';
import Shoppingcart from './pages/Shoppingcart'
import Admincheckorders from './pages/Admincheckorders';
import Drinks from './pages/Drinks';
import Streetfood from './pages/Streetfood';
import Specialfood from './pages/Specialfood';
import Dashboardadmin from './pages/Dashboardadmin';
import Headernavbaradmin from './pages/Headnavbaradmin';
import Deliverylogin from './pages/Deliverylogin';
import Deliverysignup from './pages/Deliverysignup';
import Deliverycheckorders from './pages/Deliverycheckorders';
import Deliveryheadernavbar from './pages/Deliveryheadernavbar';


const App = () =>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='service' element={<Service/>} />
          <Route path='headernavbar' element={<Headernavbar/>} />
          <Route path='headernavbaradmin' element={<Headernavbaradmin/>} />
          <Route path='forgetpass' element={<Forgetpass/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='dashboardadmin' element={<Dashboardadmin/>} />
          <Route path="heromain" element={<Heromain/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="footer" element={<Footer/>}/>
          <Route path="fastfood" element={<Fastfood/>}/>
          <Route path="setmenu" element={<Setmenu/>}/>
          <Route path="streetfood" element={<Streetfood/>}/>
          <Route path="drinks" element={<Drinks/>}/>
          <Route path="specials" element={<Specialfood/>}/>
          <Route path="shoppingcart" element={<Shoppingcart/>}/>
          <Route path="admincheckorders" element={<Admincheckorders/>}/>
          <Route path="deliverylogin" element={<Deliverylogin/>}/>
          <Route path="deliverysignup" element={<Deliverysignup/>}/>
          <Route path="deliverycheckorders" element={<Deliverycheckorders/>}/>
          <Route path="deliveryheadernavbar" element={<Deliveryheadernavbar/>}/>
          <Route path='*' element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
