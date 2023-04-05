import {React,useState,useEffect } from 'react';
import Axios from 'axios';
import {Link, NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import "../css pages/Adminpanel.css"
import Headernavbar from './Headernavbar';
import Headernavbaradmin from './Headnavbaradmin';

const Admincheckorders = () => {
    const [cartItems, setCartItems] = useState([]);
    let localStorageLoggedState=localStorage.getItem("localStorageLoggedState");
    let localStorageUsername=localStorage.getItem("localStorageUsername");

    useEffect(() => {
        //alert(localStorageUsername);
        Axios.get('http://localhost:8080/admincheckorders',
        ).then((response) =>{
            //alert(JSON.stringify(response.data));
            setCartItems(response.data);
        }, [localStorageUsername]);
    });

  return (
    <div>
        <Headernavbaradmin/>
        <h1>All orders are here</h1>
        <table className="orders" id="orderHead">
            <td className="orders_name">name</td>
            <td className="ordersnestedbar">
                <div className="ordersnested">
                    <td className="orders_item_name">item name</td>
                    <td className="orders_pieces">pieces</td>
                </div>
            </td>
            <td className="orders_total_price">total price</td>
            <br/>
        </table>
    
        {cartItems.map((cartItem) => (
            <table key={cartItem.order_id} className="orders">
                <td className="orders_name">{cartItem.name}</td>
                <td className="ordersnestedbar">
                    {JSON.parse(cartItem.order).map((curelem) => (
                        <div key={curelem.name} className="ordersnested">
                            <td className="orders_item_name">{curelem.name}</td>
                            <td className="orders_pieces">{curelem.prodCount}</td>
                        </div>
                    ))}
                </td>
                <td className="orders_total_price">{cartItem.total}</td>
            </table>
        ))} 
    </div>
  )
}

export default Admincheckorders