
import React, { Component } from 'react';
import AmpliacionRutaExtrema from './AmpliacionRutaExtrema';

class AmpliacionRutaDelCafe extends Component {

    constructor() {
        super();
        this.state = {
            departamentos: [],
            municipios: []
        };

    }

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Presentación</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Legada</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Imagenes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Ruta del Café</h5>
                        <p className="card-text">Ruta </p>
                        <div className="card mb-3">
                            <img src="img/rutacafe.jpeg" className="rounded mx-auto d-block" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Natural</h5>
                                <div className="card mx-auto">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">rutacafe@hot.co</li>
                                        <li className="list-group-item">3124567889</li>
                                        <li className="list-group-item">Aquitania</li>
                                        <li className="list-group-item">Antioquia</li>
                                        <li className="list-group-item">0</li>
                                    </ul>
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary marginDerecha">Comentar</a>
                        <a href="#" className="btn btn-warning">Calificar</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default AmpliacionRutaDelCafe;
