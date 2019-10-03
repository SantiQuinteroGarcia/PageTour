import React, { Component } from 'react';

class PerfilLugar extends Component {


    render() {
        return (
            <div>
                <div className="jumbotron bg-primary text-light font-weight-bolder">
                    <h1 className="display-4">¡Bienvenido de nuevo!</h1>
                    <p className="lead">Pagetour quiere que seas uno de los mejores lugares.</p>
                    <hr className="my-4"></hr>
                    <p>Recuerda que ofrecer bonos redimibles, es una manera de invitar al turismo responsable</p>
                </div>
                <div className="container">
                    <form className="text-primary">
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Nombre</label>
                                <p className="text-dark">Parque Temático Hacienda Nápoles</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Encargado</label>
                                <p className="text-dark">Pablo Escobar</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefaultUsername">Correo
                                    electrónico</label>
                                    <p className="text-dark">pabloescobar@haciendanapoles.com</p>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault03">Tipo de lugar</label>
                                <p className="text-dark">Natural</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault02">Descripción</label>
                                <p className="text-dark">Lugar donde se encuentran animales exóticos y parque de agua</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationDefault04">Teléfono</label>
                                <input type="number" className="form-control" id="telefono" value="11111111"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label>Actividades</label>
                                <input type="text" className="form-control" value="Acampar, Nadar, Caminatas"></input>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label>Hoteles</label>
                                <input type="text" className="form-control" value="África, Casa Blanca, La Colina"></input>
                            </div>
                            <div className="text-dark">
                                <label className="text-primary marginLados">¿Hay parqueaderos?</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="hayParquedaero" id="siHayParqueadero" value="si" checked></input>
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
                        <div className="form-row">
                            <div className="text-dark">
                                <label className="text-primary marginDerecha">Puntos redimibles</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="Recoger_basuras" id="puntoRedimible1" checked></input>
                                    <label class="form-check-label" for="puntoRedimible1">Recoger basuras - 5000</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="Compras_artesanales" id="puntoRedimible2" checked></input>
                                    <label class="form-check-label" for="puntoRedimible2">Compras artesanales - 5000</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="Siembra_arbol" id="puntoRedimible3" checked></input>
                                    <label class="form-check-label" for="puntoRedimible3">Siembra un árbol - 8000</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="ir_bicicleta" id="puntoRedimible4" checked></input>
                                    <label class="form-check-label" for="puntoRedimible4">Usar bicicleta - 5000</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-row text-dark">
                            <label className="text-primary marginDerecha">Horario</label>
                            <table class="table table-striped table-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Lunes</th>
                                        <td scope="col"><span>Hora entrada</span><input type="time" className="marginLados" id="horaEntLun" value="06:00"></input><span className="marginLados">Hora salida</span><input type="time" className="marginDerecha" id="horaSalLun" value="18:00"></input></td>
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

export default PerfilLugar;
