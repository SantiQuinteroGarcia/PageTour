import React, { Component } from 'react';

class RegistroTuristas extends Component {

    constructor() {
        super();
        this.state = {
            departamentos: [],
            municipios: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.fetchDepartments();
    }
    fetchDepartments() {
        fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json?$query=select distinct departamento')
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                this.setState({ departamentos: jsonData });
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }

    handleChange(e) {

        const dep = e.target.value;
        fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=' + dep)
            .then(response => response.json())
            .then((jsonData) => {

                this.setState({ municipios: jsonData });
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }


    render() {
        return (
            <div>
                <div className="jumbotron bg-danger text-light">
                    <h1 className="display-3">Registro de turistas</h1>
                    <p className="lead">Para PageTour es indispensable tener aquí los turistas</p>
                    <hr className="my-4"></hr>
                    <p>Registrala y comienza a ayudar al turismo</p>
                    <a className="btn btn-warning btn-lg" href="#" role="button">Aprender más</a>
                </div>
                <div className="container">
                    <form className="text-primary" action="/users/signup" method="POST">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="nameTurista">Nombre</label>
                                <input type="text" className="form-control" name="name" id="nameTurista" placeholder="Nombre" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="lastNameTurista">Apellidos</label>
                                <input type="text" className="form-control" name="lastName" id="lastNameTurista" placeholder="Apellidos" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="emailTurista">Correo electronico</label>
                                <input type="email" className="form-control" name="email" id="emailTurista" placeholder="Correo" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="passwordTurista">Contraseña</label>
                                <input type="password" className="form-control" name="password" id="passwordTurista" placeholder="Contraseña" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="ConfirmPasswordTurista">Confirmar contraseña</label>
                                <input type="password" className="form-control" name="confirmPassword" id="ConfirmPasswordTurista" placeholder="Confirmar contraseña" required></input>

                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Nombre</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder="Nombre" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Apellidos</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder="Apellidos" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo electronico</label>
                                <input type="email" className="form-control" id="validationDefault02" placeholder="Correo" required></input>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">

                                <label>Tipo de documento</label>
                                <select className="custom-select" name="tipoDocumento" id="tipoDocuemntoTurista" required>
                                    <option selected>Cédula de ciudadanía</option>
                                    <option>Pasaporte</option>
                                    <option>Registro civil</option>
                                </select>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="numDocumentoTurista">Número de documento</label>
                                <input type="number" className="form-control" name="numDocumento" id="numDocumentoTurista" placeholder="Número de documento" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="telefonoTurista">Teléfono</label>
                                <input type="number" className="form-control" name="telefono" id="telefonoTurista" placeholder="Teléfono" required></input>

                                <label for="validationDefault03">Tipo de documento</label>
                                <select className="custom-select">
                                    <option selected></option>
                                </select>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Número de documento</label>
                                <input type="number" className="form-control" id="validationDefault02" placeholder="Número de documento" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault05">Teléfono</label>
                                <input type="number" className="form-control" id="validationDefault05" placeholder="Teléfono" required></input>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">

                                <label for="list-departamento">Departamento</label>
                                <select onChange={this.handleChange} id="list-departamento" name="departamento" className="custom-select" required>

                                <label for="validationDefault03">Departamento</label>
                                <select onChange={this.handleChange} id="list-departamento" className="custom-select">

                                    {
                                        this.state.departamentos.map(dep => {
                                            return (

                                                <option>{dep.departamento}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col">

                                <label for="list-ciudad">Ciudad</label>
                                <select id="list-ciudad" name="ciudad" className="custom-select" required>

                                <label for="validationDefault04">Ciudad</label>
                                <select id="list-ciudad" className="custom-select">

                                    {
                                        this.state.municipios.map(mun => {
                                            return (
                                                <option>{mun.municipio}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                        </div>
                        <br></br>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="terminos" required></input>
                                <label className="form-check-label" for="terminos">
                            <div className="col">
                                <label for="validationDefault05">Teléfono</label>
                                <input type="text" className="form-control" id="validationDefault05" placeholder="Teléfono" required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="invalidCheck2" required></input>
                                <label className="form-check-label" for="invalidCheck2">
                                    Acepto los términos y condiciones
                        </label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Registrarse</button>
                    </form>
                </div>
            </div >
        );
    }
}

export default RegistroTuristas;
