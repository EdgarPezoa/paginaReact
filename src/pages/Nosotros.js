import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardProducto } from '../components/CardProducto';

export class Nosotros extends Component{
    state = {
        productos:{},
        usuarios:{}
    }

    componentDidMount(){
        fetch('https://angular-front-api.firebaseio.com/productos.json')
            .then( res => res.json())
            .then( data => {
                this.setState({productos: data});
                console.log(this.state.productos);
            });
        fetch('https://angular-front-api.firebaseio.com/usuarios.json')
            .then( res => res.json())
            .then( data => {
                this.setState({usuarios: data});
                console.log(this.state.usuarios);
            });
    }

    renderUsuarios = () => {
        const { usuarios } = this.state;
        return (
            Object.keys(usuarios).map( (usuario) => {
                return (
                    <div className="col-md-6" key={ usuarios[usuario].id }>
                        <p>{ usuarios[usuario].nombre }</p>
                        <p>{ usuarios[usuario].email }</p>
                        <p>¡Desde API-REST!</p>
                    </div>
                )
            })
        )
    }

    renderProductos = () => {
        const { productos } = this.state;
        return (
            Object.keys(productos).map( (producto) => {
                return (
                    <div key={ productos[producto].id } className="col-md-4">
                        <CardProducto 
                            imagen={ productos[producto].imagen } 
                            nombre={ productos[producto].nombre } 
                            precio={ productos[producto].precio } 
                        />
                    </div>
                )
            })
        )
    }

    render(){
        return(
            <div id="nosotros">
                <div className="container">
                    <h1>Nosotros</h1>
                    <div className="row">    
                        { this.renderUsuarios() }
                    </div>
                    <hr />
                    <div className="row">
                        { this.renderProductos() }
                    </div>
                </div>
            </div>
        )
    }
}