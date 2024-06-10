import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hey Welocme!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'm
            <strong className="main-name"> Rakshith </strong>
          </h1>
        </Container>
        <Type/>
      </Container>
      <Projects />
    </section>
  );
}

export default Home;
