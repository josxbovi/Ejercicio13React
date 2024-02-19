import React from "react";
import { Card, CardBody, CardText } from "react-bootstrap";

const WeatherDisplay = ({ datos }) => {
  console.log(datos);
  return (
    <div className="d-flex justify-content-center">
      <Card className="w-25">
        <CardBody>
          <CardText>
            Clima: {datos.weather[0].main}
            <br />
            Temperatura: {datos.main.temp}°C
            <br />
            Maxima: {datos.main.temp_max}
            <br />
            Minima: {datos.main.temp_min}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default WeatherDisplay;