import {Link} from 'react-router-dom'
import React, { useContext } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
    return (
    <nav className = {styles.navbar}>
        <h2 >Node Todo</h2>
        <ul>
            <li><Link to ="/home">See All</Link></li>
            <li><Link to ="/create">Create task</Link></li>
            <li><Link to ="/search"> <i class="bi bi-search"></i></Link> </li>
        </ul>
    </nav>
    );
  }
  
  export default Navbar;
  