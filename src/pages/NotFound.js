import React, { Component } from 'react';

export class NotFound extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="notFound">
                <h1>Pagina no encontrada: 404</h1>
            </div>
        )
    }
}