import React, { Component } from 'react';

class PerfilTurista extends Component {



    render() {
        return (
            <div>
                <div className="jumbotron bg-danger text-light font-weight-bolder">
                    <h1 className="display-4">¡Bienvenido de nuevo!</h1>
                    <p className="lead">Pagetour quiere conectarte con los mejores
                        lugares.</p>
                    <hr className="my-4"></hr>
                    <p>Recuerda ir en busca de los bonos redimibles, es una manera
                        de
                        hacer turismo responsable</p>
                </div>
                <div className="container">
                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Nombre</label>
                                <p className="text-dark">Santiago De Jesús</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Apellidos</label>
                                <p className="text-dark">Quintero García</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo
                                    electrónico</label>
                                    <p className="text-dark">santiago.quinterog@upb.edu.co</p>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Tipo de documento</label>
                                <p className="text-dark">Cédula de ciudadanía</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Número de documento</label>
                                <p className="text-dark">1111111111</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault04">Teléfono</label>
                                <input type="number" className="form-control" id="telefono" value="11111111"></input>
                            </div>
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
                        
                        <button className="btn btn-primary" type="submit">Actualizar
                        Perfil</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PerfilTurista;
