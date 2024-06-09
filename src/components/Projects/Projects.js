import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lovetoair from "../../Assets/Projects/lovetoair.png";
import pickleballho from "../../Assets/Projects/pickleballho.png";
import ho from "../../Assets/Projects/ho.png";
import tao from "../../Assets/Projects/tao.png";
import bullsvsbears from "../../Assets/Projects/bullsvsbears.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import casacu from "../../Assets/Projects/casacu.png";
import switchstore from "../../Assets/Projects/switch.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={casacu}
              isBlog={false}
              title="𝖼 𝖺 𝗌 𝖺 ∙ 𝖼 𝗎  𝖢𝗎𝗅𝗍𝗎𝗋𝖾 𝖬𝖾𝖾𝗍𝗌 𝖣𝖾𝗌𝗂𝗀n"
              description="Online Store for casa-cu on 923 Montana Avenue Santa Monica California 90403"
              link="https://www.casa-cu.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={switchstore}
              isBlog={false}
              title="Wix Store for Sports Merch"
              description="Switch, is a parent company for WDRLL and 35and7Apparel. These are store take group merch orders 
              for softball, tee ball, hats, game gear etc"
              link="https://tizoccampos.wixsite.com/newweb/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pickleballho}
              isBlog={false}
              title="PickleBall Event Finder"
              description="Full Stack Pickle-Ball Website built using MERN Stack and hosted on RENDER, Has 2 Logins User/Admin, Admin can create Events,RoundRobins,Tournaments and Users can View and join these events through Admin's Posted Links"
              link="https://pbho-frotnend.onrender.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lovetoair}
              isBlog={false}
              title="LovetoAir"
              description="A Review Website where buyers can air their grievances about their sellers. 1) CREATED DATABSE SCHEMA FROM SCRATCH USING MYSQL WORKBENCH 2)BACKEND-Node.js 3)FRONTEND-React "
              link="https://lovetoair.com/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ho}
              isBlog={false}
              title="Pickleball Ho!"
              description="I built this site for my good friend on Square Space"
              link="https://www.pickleballho.com/"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tao}
              isBlog={false}
              title="Ai For Social Good"
              description="This is a simple Shopify Merch Store for Crypto Currency $TAO, Built and modified existing free template and added credit, debit and crypto payment methods"
              link="https://taomerch.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bullsvsbears}
              isBlog={false}
              title="BullsVSBears"
              description="This is an Option-Sweep Website,Built on React.js API's from Bloomberg.com, cleaned and modified data on backend using python. Node.jS Server, Postgres for storing userdata, Currently down but you can check the code in my github"
              link="https://bullsvsbears.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Portfolio Website"
              link="https://github.com/rakshith22-glitch/portfolio"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
