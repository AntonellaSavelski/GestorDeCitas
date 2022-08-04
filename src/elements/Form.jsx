import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { NuevaCita } from './ListaCitas';

export default function Forms() {

    let [mascota, setMascota] = useState("");
    let [dueno, setDueno] = useState("");
    let [fecha, setFecha] = useState("");
    let [hora, setHora] = useState("");
    let [sintomas, setSintomas] = useState("");

    function Enviar() {
        NuevaCita(mascota, dueno, fecha, hora, sintomas);
        mascota = useState("");
        dueno = useState("");
        fecha = useState("");
        hora = useState("");
        sintomas = useState("");
    }

    return (
        <Form>
            <Form.Label class="label">Nombre Mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre Mascota" value={mascota} onChange={text => setMascota({ ...mascota, mascota: text })} />

            <Form.Label class="label margen">Nombre Dueño</Form.Label>
            <Form.Control type="text" placeholder="Nombre dueño de la mascota" value={dueno} onChange={text => setDueno({ ...dueno, dueno: text })} />

            <Form.Label class="label margen">Fecha</Form.Label>
            <Form.Control type="date" value={fecha} onChange={date => setFecha({ ...fecha, fecha: date })} />

            <Form.Label class="label margen">Hora</Form.Label>
            <Form.Control type="time" value={hora} onChange={time => setHora({ ...hora, hora: time })} />

            <Form.Label class="label margen">Sintomas</Form.Label>
            <Form.Control type="text" value={sintomas} onChange={text => setSintomas({ ...sintomas, sintomas: text })} />

            <div className="d-grid pt-4">
                <Button variant="primary" type="submit" size="lg" onClick={(Enviar)} >
                    AGREGAR CITA
                </Button>
            </div>
        </Form>
    );
}
