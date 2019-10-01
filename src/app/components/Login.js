import React, { Component } from 'react';

class Login extends Component {


    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <main className="container">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" required></input>
                            <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label className="form-check-label" for="inlineRadio1">Entidad Oficial</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                            <label className="form-check-label" for="inlineRadio2">Empresa Propietaria</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                            <label className="form-check-label" for="inlineRadio3">Turista</label>
                        </div>
                        <br></br>
                        <br></br>
                        <div>
                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}

export default Login;
