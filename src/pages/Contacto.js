import React, { Component } from 'react';
import { ModalExito } from '../components/ModalExito';


// const useModal= () => {
//     const [open, setOpen] = React.useState(false);

//     const handleOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };

//     return {open, handleClose, handleOpen};
// }
export class Contacto extends Component{
    state = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    }

    onChangeNombre = (event) => {
        this.setState({ nombre: event.target.value });
    }
    
    onChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    
    onChangeAsunto = (event) => {
        this.setState({ asunto: event.target.value });
    }
    
    onChangeMensaje = (event) => {
        this.setState({ mensaje: event.target.value });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state){

        }
        console.log(this.state.nombre, this.state.email, this.state.asunto, this.state.mensaje);
    }

    validarVacio = ()=>{
        if(this.state.nombre != '' && this.state.email != '' && this.state.asunto != '' && this.state.mensaje != ''){
            return true
        }
        return false;
    }

    render(){
        let modal;
        if(this.validarVacio()){
            modal = <ModalExito>¡Formulario enviado con éxito</ModalExito>;
        }else{
            modal = <ModalExito buttonDissable={true} >¡Formulario enviado con éxito!</ModalExito>;
        }
        return(
            <div id="contacto">
                <h1>Contacto container</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <h2>Informacion de contacto</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p className="mp0">
                                Email: Pezoa.1@gmail.com
                            </p>
                            <p>
                                Número: +56(9) 4444 4444
                            </p>

                            <div className="dCenter">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213144.0483647263!2d-70.7461337835938!3d-33.41344669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf2657c7ff4d%3A0xdd78f541b0f0d49c!2sGoogle%20Chile!5e0!3m2!1ses!2scl!4v1586214954608!5m2!1ses!2scl" width="500" height="350" aria-hidden="false"></iframe>
                            </div>
                            
                        </div>
                        <div className="col-md-7 formContainer">
                            <form onSubmit={ this.handleSubmit }>
                                <div className="form-group">
                                    <label htmlFor="nombre" >Nombre <span className="obligatorio">*</span> </label>
                                    <input id="nombre" className="form-control" type="text" value={ this.state.nombre } onChange={ this.onChangeNombre } required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email <span className="obligatorio">*</span></label>
                                    <input id="email" className="form-control" type="email" value={ this.state.email }  onChange={ this.onChangeEmail } required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="asunto">Asunto <span className="obligatorio">*</span></label>
                                    <input id="asunto" className="form-control" type="text" value={ this.state.asunto } onChange={ this.onChangeAsunto } required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje <span className="obligatorio">*</span></label>
                                    <textarea id="mensaje" className="form-control" rows="8" value={ this.state.mensaje } onChange={ this.onChangeMensaje } required ></textarea>
                                </div>
                                <div className="form-group">
                                    {modal}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}