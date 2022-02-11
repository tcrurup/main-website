import React, { Component } from 'react'
import { Link } from "react-router-dom"

const Navbar = props => {
    
    return <div className='navbar-container'>
        Navbar is here
        <Link to="/game">Game</Link>
        <Link to="/blog">Game</Link>
    </div>
} 

export default Navbar


