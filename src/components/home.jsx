import { useState } from "react";
import { Col, Row, Form, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  const [city, setCity] = useState("");
  const meteo = useSelector((state) => state.meteo);
  const multipleDays = useSelector((state) => state.multipleDays);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const resp = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=5f6b695affa36694e42fa9c64a756b77"
      );
      const data = await resp.json();
      const info = await data[0];
      //   console.log(info);
      handleMeteo(info);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMeteo = async (info) => {
    try {
      const resp = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          info.lat +
          "&lon=" +
          info.lon +
          "&appid=5f6b695affa36694e42fa9c64a756b77"
      );
      const data = await resp.json();
      //   console.log(data);
      dispatch({ type: "SET_METEO", payload: data });
      handleMultipleDays(info);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMultipleDays = async (info) => {
    try {
      const resp = await fetch(
        "http://api.openweathermap.org/data/2.5/forecast?lat=" +
          info.lat +
          "&lon=" +
          info.lon +
          "&appid=5f6b695affa36694e42fa9c64a756b77"
      );
      const data = await resp.json();
      console.log(data);
      dispatch({ type: "SET_MULTIPLE_DAYS", payload: data });
      navigate("/meteo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1 className="display-4 text-white">Di quale parte del mondo vuoi sapere le condizioni meteo?</h1>
        <Row className="justify-content-center mt-3">
          <Col xs={10}>
            <Form.Control
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="Digita una parte del mondo"
              className=" mr-sm-2 "
            />
          </Col>
          <Col xs="auto">
            <Button variant="info" type="submit" className="text-light">
              Trova
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Home;
