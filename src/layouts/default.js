import React from "react"
import MainNav from "../components/mainnav.js"
import 'bootstrap/dist/css/bootstrap.css';

export default function Default({children}) {
    return (
    <>
        <header>
        <div className="container">
            <div className="row">

                <div className="col-sm-12">
                    <h1>Unique Recepies</h1>
                </div>
                <div className="col-sm-12">
                    <MainNav></MainNav>

                </div>
            </div>
        </div>
        <hr></hr>
        </header>

        <div className="container">
        {children}
        </div>
        
        <footer>
        <hr></hr>
        <div className="container footer">
            <div className="row">

                <div className="col-sm-2 year">
                    &copy; 2021
                </div>
                <div className="col-sm-8">
                    <MainNav></MainNav>
                </div>
                <div className="col-sm-2 social-media">
                    [social media]
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}