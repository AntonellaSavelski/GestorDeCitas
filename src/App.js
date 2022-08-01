 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min';
import Forms from './elements/Form';
import { Container } from 'react-bootstrap';
import './index.css';
import Cards from './elements/Card';

const [mascota, setMascota] = useState("");
const [dueño, setDueño] = useState("");
const [fecha, setFecha] = useState("");
const [hora, setHora] = useState("");
const [sintomas, setSintomas] = useState("");

function App() {
  return(
    <div>
      <header><h1>ADMINISTRADOR DE PACIENTES</h1></header>
      <main>
        <div className="row col-12">
            <div className="col-md-3"></div>
            <div className="col-md-3">
            <h1>CREAR MI CITA</h1>
            <Forms/>
            </div>
            <div className="col-md-3">
              <h1>ADMINISTRA TUS CITAS</h1>
              <Cards

              
              />
              

            </div>
            <div className="col-md-3"></div>
          </div>
      </main>
      <footer></footer>
         
    </div>
  )
}

export default App;



<Forms/>
