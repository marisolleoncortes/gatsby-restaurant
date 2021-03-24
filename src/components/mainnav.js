import React from "react"
import { Link } from "gatsby"

export default function MainNav() {
    return (
        <ul className="main-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Product</li>
        </ul>
    )
}