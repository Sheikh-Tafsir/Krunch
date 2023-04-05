import {React,useEffect,useState, Component} from 'react'
import Axios from 'axios';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import Headernavbar from './Headernavbar';
import "../css pages/Dasboardadmin.css"
import ReactApexChart from "react-apexcharts";
import Headernavbaradmin from './Headnavbaradmin'

const Dashboardadmin = () => {
    let localStorageUsername=localStorage.getItem("localStorageUsername");
    const [productsales, setProductsales]=useState([]);

    useEffect(() => {
        //alert(localStorageUsername);
        Axios.get('http://localhost:8080/profileadmin',
        ).then((response) =>{
            //alert(JSON.stringify(response.data));
            setProductsales(response.data);
        }, [localStorageUsername]);
    });
  return (
    <>
        <Headernavbaradmin/>
        <div className="dashboardadmin">
          <h1>Product sells</h1>
          <div className="productsales">
            {productsales.map((productsale) => (
              <div key={productsale.name} className="productsale">
                <h2>Item name: {productsale.name}</h2>
                <p>Total sales: {productsale.quantity}</p>
              </div>
            ))} 
          </div>
        </div>
    </>
  )
}

export default Dashboardadmin