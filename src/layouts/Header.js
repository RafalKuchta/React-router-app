import React from 'react';
import '../styles/Header.css';
import {Route, Switch} from 'react-router-dom';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';

const Header = () => {
// Losowanie obrazka 
// const images = [img1, img2, img3];
// const index = Math.floor(Math.random() * 3)
// const img = images[index]
    return ( 
        <>
        <Switch>
        <Route path="/" exact render={()=>(
            <img src={img1} alt="dom"/>
        )}/>

        <Route path="/products" render={()=>(
            <img src={img2} alt="dom"/>
        )}/>

        <Route path="/contact" render={()=>(
            <img src={img3} alt="dom"/>
        )}/>

        <Route path="/admin" render={()=>(
            <img src={img1} alt="dom"/>
        )}/>

        <Route render={()=>(
            <img src={img1} alt="dom"/>
        )}/>
        </Switch> 

        {/* <img src={img} alt=""/> Lozowanie obrazka */}
       </>
       
     );
}
 
export default Header;