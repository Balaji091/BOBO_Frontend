
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "../assets/girl1.png"; // cropped image
import thinking from "../assets/thinking.png";
import light from "../assets/light.png";
import yoga from "../assets/yoga.png";
import question from "../assets/question.png";
import heart from "../assets/heart-rate.png";

const EmotionalSupportSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#55A96D",
        padding: "60px 20px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <img src={thinking} alt="thinking" style={{ position: "absolute", top: "40px", left: "56px",height:"91px", width: "91px", opacity: 0.3 }} />
      <img src={light} alt="light" style={{ position: "absolute", top: "50px", left: "48%", height:"91px", width: "91px", opacity: 0.3 }} />
      <img src={question} alt="question" style={{ position: "absolute", top: "40px", right: "60px",height:"91px", width: "91px", opacity: 0.3 }} />
      <img src={yoga} alt="yoga" style={{ position: "absolute", bottom: "30px", left: "40px", height:"91px", width: "91px", opacity: 0.3 }} />
      <img src={heart} alt="heart" style={{ position: "absolute", bottom: "35px", right: "60px", height:"91px", width: "91px", opacity: 0.3}} />
      {/* Heading */}
      <h2
        className="text-center mb-5"
        style={{
          fontSize: "40px",
          fontWeight: 700,
          fontStyle: "bold",
          lineHeight: "100%",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        Workouts with real-time feedback, and <br />
        emotional support when you need it
      </h2>

      {/* Image Card */}
      <div
        style={{
          width: "948px",
          height: "412px",
          margin: "0 auto",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Full image */}
        <img
          src={bgImage}
          alt="girl"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        {/* Black overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: "20px",
          }}
        />

        {/* Text Overlay */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#FFFFFF",
            fontSize: "32px",
            fontWeight: 275,
            lineHeight: "100%",
            zIndex: 2,
          }}
        >
          your intelligent, voice and video <br />
          powered digital companion that <br />
          goes beyond chat.
        </div>
      </div>
    </section>
  );
};

export default EmotionalSupportSection;

