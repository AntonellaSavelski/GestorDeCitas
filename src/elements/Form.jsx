import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Forms() {
    return (
        <Form>

            <Form.Label class="label">Nombre Mascota</Form.Label>
            <Form.Control type="text" placeholder="Nombre Mascota" />



            <Form.Label class="label margen">Nombre Dueño</Form.Label>
            <Form.Control type="text" placeholder="Nombre dueño de la mascota" />


            <Form.Label class="label margen">Fecha</Form.Label>
            <Form.Control type="date" />


            <Form.Label class="label margen">Hora</Form.Label>
            <Form.Control type="time" />


            <Form.Label class="label margen">Sintomas</Form.Label>
            <Form.Control type="text" />

            <div className="d-grid pt-4">
                <Button variant="primary" type="submit" size="lg">
                    AGREGAR CITA
                </Button>
            </div>
        </Form>
    );
}

export default Forms;