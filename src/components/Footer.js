import React, { Component } from 'react';

export class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer id="footer">
                <div className="container-copyright">                    
                    <p className="text-muted mp0">Echo con <i className="fa fa-heart"></i> por <a href="https://edgarpezoa.cl/"><strong><i>Edgar Pezoa</i></strong></a></p>
                </div>
            </footer>
            
        )
    }
}