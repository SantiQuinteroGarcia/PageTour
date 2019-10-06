import React, { Component } from 'react';

class VisitantesDeLaSemana extends Component {


    render() {
        return (
            <div>
                <div className="jumbotron bg-danger text-light font-weight-bolder">
                    <h1 className="display-4">¡Bienvenido de nuevo!</h1>
                    <p className="lead">Pagetour reconoce a los turistas más activos durante la semana.</p>
                    <hr className="my-4"></hr>
                    <p>Recuerda practicar el turismo responsable.</p>
                </div>
                <div className="container bg-danger p-5">
                    <h2 className="text-center text-white mb-5 font-weight-bold">Visitantes de la semana</h2>
                    <div className="card-deck styleCard">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Santiago Quintero</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Visitar su perfil</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">José Manuel Echeverrí</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Visitar su perfil</a>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sherlock Holmes</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Visitar su perfil</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default VisitantesDeLaSemana;
