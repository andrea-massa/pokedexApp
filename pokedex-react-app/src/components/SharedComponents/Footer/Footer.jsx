import React from "react";

import bitmoji from "../../../assets/bitmoji-smile.png";
import linkedinLogo from "../../../assets/linkedin-logo.png";
import githubLogo from "../../../assets/github.png";

import "./Footer.css";


export default function Footer(){
    return (
        <footer className="footer">
            <section className="footer-section container-md" id="author-section">
                <h4>© 2024 Andrea Massa</h4>
                <p>andreamassa1999@gmail.com</p>
                <div className="container-sm" id="links-container">
                    <a className="footer-link" href="https://andreamassa.com/" target="blank">
                        <img className="img-fluid" src={bitmoji} alt="official-website"/>
                        <p>Official Website</p>
                    </a>
                    <a className="footer-link" href="https://www.linkedin.com/in/andrea-massa-48381115b/" children target="blank">
                        <img className="img-fluid" src={linkedinLogo} alt="linkedin"/>
                        <p>LinkedIn</p>
                    </a>
                    <a className="footer-link" href="https://github.com/andrea-massa" target="blank">
                        <img className="img-fluid" src={githubLogo} alt="github"/>
                        <p>Github</p>
                    </a>
                </div>
            </section>
            <section className="footer-section container-md" id="credits-section">
                <h5>Attributions & Notices</h5>
                <p>Pokemon Data provided by 
                    <a href="https://pokeapi.co/" target="blank">PokeApi v2 by Nintendo</a>
                </p>
            </section>
        </footer>
    )
}