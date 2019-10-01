import React, { Component } from 'react';
import { render } from 'react-dom';
import CardTopLugares from './components/CardTopLugares';
import RegistroTurista from './components/RegistroTurista'
import RegistroEntidad from './components/RegistroEntidad'
import Precios from './components/Precios';
import RutasExtremas from './components/RutasExtremas';
import AmpliacionLugar from './components/AmpliacionLugar';
import FormularioQuejas from './components/FormularioQuejas';
import Principal from './components/Principal';
import PerfilUsuario from './components/PerfilUsuario';
import Login from './components/Login';

const btnPrincipal = document.getElementById('btn-ppal');
const btnRegistroTurista = document.getElementById('btn-registroTurista');
const btnregistroEntidad = document.getElementById('btn-registroEntidad');
const btnPrecios = document.getElementById('btn-precios');
const btnQueja = document.getElementById('btn-queja');
const btnExtremo = document.getElementById('btn-extremo');
const btnAmpliar = document.getElementById('btn-ampliar');

render(<Principal />, document.getElementById('app'));
//Acciones de los botones
btnPrincipal.addEventListener("click", () => { render(<Principal />, document.getElementById('app')); });
btnRegistroTurista.addEventListener("click", () => { render(<RegistroTurista />, document.getElementById('app')); });
btnregistroEntidad.addEventListener("click", () => { render(<RegistroEntidad />, document.getElementById('app')); });
btnPrecios.addEventListener("click", () => { render(<Precios />, document.getElementById('app')); });
btnQueja.addEventListener("click", () => { render(<FormularioQuejas />, document.getElementById('app')); });
btnExtremo.addEventListener("click", () => { render(<RutasExtremas />, document.getElementById('app')); });
btnAmpliar.addEventListener("click", () => { render(<AmpliacionLugar />, document.getElementById('app')); });

