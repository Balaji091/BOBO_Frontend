import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./AI.css"; // You’ll define CSS here
import personalImg from '../assets/personal.png'
import storyImg from '../assets/storytelling.png'
import emotionalImg from '../assets/emotional.png'
const cardData = [
  {
    title: "Personal Advisor",
    image:personalImg,
    text: "Get advice on personal decisions, productivity, and routines.",
    bg: "rgba(144, 238, 144, 0.7)" // light green
  },
 
  {
    title: "Emotional Support",
    image: emotionalImg,
    text: "Talk to someone, manage emotions, boost positivity and wellness.",
    bg: "rgba(173, 216, 230, 0.7)" // light cyan
  },
  {
    title: "Storytelling",
    image: storyImg,
    text: "Enjoy stories or create your own adventures with an AI narrator.",
    bg: "rgba(173, 216, 250, 0.7)" // light blue
  },
   {
    title: "Personal Advisor",
    image:personalImg,
    text: "Get advice on personal decisions, productivity, and routines.",
    bg: "rgba(144, 238, 144, 0.7)" // light green
  }
];

export default function AICards() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#293D2B" }}>
      <h2 className="text-center text-white fw-bold mb-4">
        Your AI Companion for Daily 
        <br/>
        Life, Learning & Wellness
      </h2>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {cardData.map((card, index) => (
          <div
            className="custom-card position-relative overflow-hidden"
            key={index}
            style={{ backgroundColor: card.bg }}
          >
            <div className="position-absolute top-0 start-0 p-4">
              <h5 className="fw-bold">{card.title}</h5>
            </div>
            <img src={card.image} alt={card.title} className="card-image position-absolute bottom-0 start-0" />
            <div className="card-hover-content">
              <p className="card-text">{card.text}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
