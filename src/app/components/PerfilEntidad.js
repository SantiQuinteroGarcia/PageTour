import React, { Component } from 'react';

class PerfilEntidad extends Component {



    render() {
        return (
            <div>
                <div className="jumbotron bg-warning text-dark font-weight-bolder">
                    <h1 className="display-4">¡Bienvenido de nuevo!</h1>
                    <p className="lead">Pagetour quiere conectarte con los turistas.</p>
                    <hr className="my-4"></hr>
                    <p>Recuerdan promover el turismo responsable.</p>
                </div>
                <div className="container">
                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Entidad</label>
                                <p className="text-dark">Central turística</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Nombre del encargado</label>
                                <p className="text-dark">Iván Buque</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Cargo</label>
                                <p className="text-dark">Gerente</p>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo
                                    electrónico</label>
                                <p className="text-dark">ivan.buque@ct.com</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault04">Teléfono</label>
                                <input type="number" className="form-control" id="telefono" value="11111111"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault05">Contraseña</label>
                                <input type="password" className="form-control"
                                    id="validationDefault05" placeholder="******"></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault06">Confirmar
                                    contraseña</label>
                                <input type="password" className="form-control"
                                    id="validationDefault06" placeholder="******"></input>
                            </div>
                        </div>
                        <br></br>
                        <button className="btn btn-primary" type="submit">Actualizar
                        Perfil</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PerfilEntidad;
