import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from '../assets/security.jpg'
import '../styles/Home.css';
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer" >

            <h1> Securiti is nymber one priority</h1>
            <p>For every valuble place</p>
            <Link to="/menu">
                <button>Buy now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home