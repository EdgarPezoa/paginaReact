import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav id="header" className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" activeClassName="active" exact to={ `/` } >React Proyect</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNavbar" aria-controls="headerNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="headerNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to={ `/` } >Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={ `/nosotros` } >Nosotros</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={ `/contacto` } >Contacto</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}