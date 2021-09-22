import React from "react";
import './header.css'
import corebizLogo from '../../assets/logo-corebiz.svg'    

export default function Header(){
    return (
        <header className="header">
            <section className="header-container">
                <div className="logo">
                    <img src={corebizLogo} alt="Logo"/>
                </div>
                <nav className="navbar">
                    <ul className="navbar-itens">
                        <li className="nav-item">
                            <a id="nav-item-corebiz" target="_blank" rel="noreferrer noopener"
                            href="https://www.corebiz.ag/pt/about/">a corebiz</a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-item-services" target="_blank" rel="noreferrer noopener"
                            href="https://www.corebiz.ag/pt/#framework-title">serviços</a>
                        </li>

                        <li className="nav-item">
                            <a id="nav-item-cases" target="_blank" rel="noreferrer noopener"
                            href="https://www.corebiz.ag/pt/cases/">cases</a>
                        </li>
                        <li className="nav-item">
                            <a id="nav-item-contact" target="_blank" rel="noreferrer noopener"
                            href="https://www.corebiz.ag/pt/contato/">contato</a>
                        </li>
                    </ul> 
                </nav>
                </section>
        </header>
    );
}