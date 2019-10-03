import React, { Component } from 'react';

class RegistroLugar extends Component {
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
                <div className="jumbotron bg-primary text-light">
                    <h1 className="display-3">Registro de lugares turísticos</h1>
                    <p className="lead">Para PageTour es indispensable tener aquí los lugares turísticos</p>
                    <hr className="my-4"></hr>
                    <p>Registrala y comienza a ayudar a los turistas</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Aprender más</a>
                </div>
                <div className="container">
                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="nombreLugar">Lugar</label>
                                <input type="text" className="form-control" id="nombreLugar" placeholder="Nombre del lugar" required></input>

                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Encargado</label>
                                <input type="text" className="form-control" id="validationDefault02" placeholder="Nombre del encargado" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label>Tipo de lugar</label>
                                <select className="custom-select" name="tipoLugar" id="tipoLugar" required>
                                    <option selected>Histórico</option>
                                    <option>Religioso</option>
                                    <option>Natural</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label>Descripción</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="precio">Precio de ingreso</label>
                                <input type="number" className="form-control" id="precio" placeholder="Precio" required></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo electrónico</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="validationDefaultUsername" placeholder="Correo" aria-describedby="inputGroupPrepend2" required></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
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
                            <div className="col-md-4 mb-3">
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
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault05">Teléfono</label>
                                <input type="number" className="form-control" id="validationDefault05" placeholder="Teléfono" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group col-md-4">
                                <label>Actividades</label>
                                <input className="form-control marginLados" placeholder="¿Qué hay para hacer?" required></input>
                                <img src="img/plus.png" height="34px" id="addActividad" alt="Añadir actividad"></img>
                            </div>
                            <div className="input-group col-md-4">
                                <label>Hoteles</label>
                                <input className="form-control marginLados" placeholder="Nombre del hotel" required></input>
                                <img src="img/plus.png" height="34px" id="addHotel" alt="Añadir hotel"></img>
                            </div>
                            <div className="text-dark">
                                <label className="text-primary marginLados">¿Hay parqueaderos?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="hayParquedaero" id="siHayParqueadero" value="si" required></input>
                                    <label class="form-check-label" for="siHayParquedaero">
                                        Sí
                                </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="hayParquedaero" id="noHayParqueadero" value="no"></input>
                                    <label class="form-check-label" for="noHayParqueadero">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="form-row">
                            <div className="text-dark">
                                <label className="text-primary marginDerecha">Puntos redimibles</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="Recoger_basuras" id="puntoRedimible1"></input>
                                    <label class="form-check-label" for="puntoRedimible1">Recoger basuras - 5000</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="Compras_artesanales" id="puntoRedimible2"></input>
                                    <label class="form-check-label" for="puntoRedimible2">Compras artesanales - 5000</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="Siembra_arbol" id="puntoRedimible3"></input>
                                    <label class="form-check-label" for="puntoRedimible3">Siembra un árbol - 8000</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="ir_bicicleta" id="puntoRedimible4"></input>
                                    <label class="form-check-label" for="puntoRedimible4">Usar bicicleta - 5000</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <label className="text-primary marginDerecha">Horario</label>
                            <table class="table table-striped table-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Lunes</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntLun"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalLun"></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Martes</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntMar"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalMar"></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Miércoles</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntMie"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalMie"></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Jueves</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntJue"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalJue"></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Viernes</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntVie"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalVie"></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Sábado</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntSab"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalSab"></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Domingo</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntDom"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSaDom"></input></td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Festivos</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntFes"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalFes"></input></td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                                <label className="form-check-label" for="invalidCheck2">Acepto los terminos y condiciones</label>
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">Registrar lugar</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegistroLugar;
