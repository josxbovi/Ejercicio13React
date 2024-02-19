import { useEffect, useState } from "react";
import Formulario from "./components/SearchForm";
import Clima from "./components/WeatherDisplay";
import { API_KEY} from "./components/data.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [datos, setDatos] = useState(null);
  const [ubicacion, setUbicacion] = useState("Tucuman");
  const [pais, setPais] = useState("ar");

  const obtenerDatos = (ubicacion) => {
    ubicacion.preventDefault();
    setUbicacion(ubicacion.target[0].value);
    setPais(ubicacion.target[1].value);
  };
  useEffect(() => {
    consutarAPI();
  }, [ubicacion, pais]);
  const consutarAPI = async () => {
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${pais}&appid=${API_KEY}&units=metric`
    );
    let resultado = await respuesta.json();
    console.log(resultado);
    setDatos(resultado);
  };
  useEffect(() => {
    if (datos !== null) {
      if (datos.cod !== 200) {
      }
    }
  }, [datos]);
  return (
    <>
      <div
        className="min-vh-100"
      >
        <div className="container">
          <Formulario
            obtenerDatos={obtenerDatos}
            ubicacion={ubicacion}
            pais={pais}
            key={"1"}
          />
          <div>
            {datos.cod === 200 ? (
              <Clima datos={datos} />
            ) : (
              <>
                <p>El lugar no se encontro</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;