import React, { Component } from 'react';

//Librerias
import $ from 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../assets/css/main.css';

export class Home extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="home">
                <h1>Home</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Seccion 1</h2>
                        </div>
                        <div className="col-md-6">
                            <h2>Seccion 2</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}