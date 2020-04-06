import React, { Component } from 'react';

export class Home extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="home">
                <h1>Home Component</h1>
                <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active imgBackground">
                            <h2 class="titleText text-center p-3">Primero</h2>
                        </div>
                        <div className="carousel-item imgBackground">
                            <h2 class="titleText text-center p-3">Segundo</h2>
                        </div>
                        <div className="carousel-item imgBackground">
                            <h2 class="titleText text-center p-3">Tercero</h2>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Seccion 1</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="col-md-6">
                            <h2>Seccion 2</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
