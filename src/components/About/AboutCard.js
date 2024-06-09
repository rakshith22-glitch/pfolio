import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            HEY  !!! I am{" "}
            <span className="purple">RAKSHITH</span>
            <br />I am passionate about coding and building applications and websites to help others start their dream businesses.
            <span className="purple"> Based in Santa Monica, California</span>
            <br />
            <br />
            Besides coding, I love to:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Pickleball, Hike, Read, Workout, Chill at coffee shops and Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you're going to try go all the way, otherwise dont even start !"
          </p>
          <footer className="blockquote-footer">Rakshith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
