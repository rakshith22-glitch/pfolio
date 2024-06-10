import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
             I specialize in building professional websites tailored to your business needs.
            <br />
            <br />
            <span className="purple">
              Based in Santa Monica, California
            </span>
            <br />
            Here's a little bit about me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I enjoy playing Pickleball, hiking, reading, working out, relaxing at coffee shops, and traveling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you're going to try, go all the way; otherwise, don't even start."
          </p>
          <footer className="blockquote-footer">Rakshith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
