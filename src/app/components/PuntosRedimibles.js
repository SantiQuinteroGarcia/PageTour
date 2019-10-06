import React, { Component } from 'react';

class PuntosRedimibles extends Component {


    render() {
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Puntos Redimibles</h1>
                    <p className="lead">Con Pagetour puedes generar ganacias haciendo turismo responsable</p>
                    <p className="lead">No cuenta nada hacer turismo responsable y hasta te damos dinero por ello</p>
                </div>
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Recoger basuras</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$5000 <small className="text-muted">pesos</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>2 fotos máximo</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Subir fotos</button>
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Compras artesanales</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$5000 <small className="text-muted">pesos</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>2 fotos máximo</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Subir fotos</button>
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Siembra un árbol</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$8000 <small className="text-muted">pesos</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>2 fotos máximo</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Subir fotos</button>
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Usa bicilceta</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$5000 <small className="text-muted">pesos</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>2 fotos máximo</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary">Subir fotos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PuntosRedimibles;
