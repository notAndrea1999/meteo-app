import { useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Details = () => {
  const meteo = useSelector((state) => state.meteo);
  const multipleDays = useSelector((state) => state.multipleDays);
  //   console.log(meteo);
  const icon = meteo.weather[0].icon;
  const temp = parseInt(meteo.main.temp - 273.15);
  const tempMin = parseInt(meteo.main.temp_max - 273.15);
  const tempMax = parseInt(meteo.main.temp_min - 273.15);

  console.log(multipleDays.list);

  return (
    <div style={{ marginTop: "80px" }}>
      <h2 className="display-4 ">Previsioni Meteo</h2>
      <Container className="main bg-info text-light rounded-pill w-50" style={{ border: "2px solid black" }}>
        <Row className="justify-content-center flex-column mt-3">
          <Col xs={12}>
            <h4 className="display-2 fs-3 mb-1 mt-2">{meteo.name}</h4>
            <p className="fs-1 fw-light mb-2">{temp}°C</p>
            <h4 className="fw-light">{meteo.weather[0].description}</h4>
            <p className="mb-2">
              MAX:{tempMax}° MIN:{tempMin}°
            </p>
            <img width="60px" src={"http://openweathermap.org/img/w/" + icon + ".png"} alt="meteo.png" />
          </Col>
        </Row>
      </Container>
      <h2 className="display-4 mt-2 ">Meteo per le prossime ore</h2>
      <Container>
        <Row className="gy-4">
          {multipleDays.list.map((days) => (
            <Col sm={12} md={6}>
              <Card className=" main2 bg-info text-light rounded-pill " style={{ border: "2px solid black" }}>
                <Card.Body>
                  <Card.Text className="fs-4 fw-light mb-2">
                    Previsioni per il giorno: <br /> {days.dt_txt}
                  </Card.Text>
                  <Card.Text className="fs-5 mb-2">{days.weather[0].description}</Card.Text>
                  <Card.Text className="fs-1 mb-2">{parseInt(days.main.temp - 273.15)}°</Card.Text>
                  <Card.Img
                    variant="fluid"
                    src={"http://openweathermap.org/img/w/" + days.weather[0].icon + ".png"}
                    style={{ width: "100px" }}
                  />
                  <Card.Text className="fs-5 fw-light mb-2">
                    MAX:{parseInt(days.main.temp_min - 273.15)}° MIN:{parseInt(days.main.temp_max - 273.15)}°
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Details;
