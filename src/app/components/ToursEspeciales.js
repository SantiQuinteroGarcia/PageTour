import React, { Component } from 'react';

class ToursEspeciales extends Component {


    render() {
        return (
            <div>
                <div className="jumbotron bg-primary text-light font-weight-bolder">
                    <h1 className="display-4">¡Bienvenido de nuevo!</h1>
                    <p className="lead">Pagetour quiere conectarte con los Tours Especiales.</p>
                    <hr className="my-4"></hr>
                        <p>Recuerda ir en busca de los bonos redimibles, es una manera
                            de
                    hacer turismo responsable</p>
                </div>
                <div className="container bg-primary p-5">
                    <h2 className="text-center text-white mb-5 font-weight-bold">Tours Especiales</h2>
                    <div className="card-deck styleCard">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                                    additional
                            content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional
                                    content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content. This card has even longer content than the first to show that equal height action.
                                        </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary">Ampliar</a>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"></hr>
                        <nav aria-label="Page navigation example mt-5">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                </div>
            </div>
        );
    }
}

export default ToursEspeciales;
