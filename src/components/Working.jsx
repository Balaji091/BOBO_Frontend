import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import howLogo from "../assets/howLogo.png";  // Girl image
import arrow from "../assets/arrow.png";      // Arrow icon

const steps = [
  { text: "Download the Hey BoBo app or access via web", number: 1 },
  { text: "Download the Hey BoBo app or access via web", number: 2 },
  { text: "Download the Hey BoBo app or access via web", number: 3 },
  { text: "Download the Hey BoBo app or access via web", number: 4 },
  { text: "Download the Hey BoBo app or access via web", number: 5 },
  { text: "Download the Hey BoBo app or access via web", number: 6 },
];

const StepCard = ({ text, number }) => (
  <div
    className="d-flex align-items-center position-relative"
    style={{
      width: "339px",
      height: "106px",
      background: "#ffffff",
      opacity: 0.5,
      borderRadius: "12px",
      padding: "16px 20px",
      color: "#000",
      backdropFilter: "blur(6px)",
      zIndex: 3,
    }}
  >
    <img
      src={arrow}
      alt="arrow"
      style={{ width: "26px", marginRight: "12px", zIndex: 2 }}
    />
    <span className="fw-medium z-2">{text}</span>
    <span
      className="position-absolute"
      style={{
        top: "8px",
        right: "20px",
        fontSize: "48px",
        fontWeight: "bold",
        opacity: 0.2,
        zIndex: 1,
      }}
    >
      {number}
    </span>
  </div>
);

const HowItWorks = () => {
  return (
    <section
      className="position-relative"
      style={{
        backgroundColor: "#55A96D",
        overflow: "hidden",
        paddingBottom: "0px",
      }}
    >
      {/* Heading */}
      <div className="text-center pt-5 pb-4">
        <h2 className="fw-bold text-white">How It Works</h2>
      </div>

      {/* Orange Arc */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x"
        style={{
          width: "700px",
          height: "350px",
          backgroundColor: "#FFAA48",
          borderTopLeftRadius: "350px",
          borderTopRightRadius: "350px",
          zIndex: 1,
        }}
      ></div>

      {/* Content layout */}
      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div
          className="d-flex justify-content-center align-items-end"
          style={{ minHeight: "500px", gap: "20px" }}
        >
          {/* Left Step Cards */}
          <div className="d-flex flex-column justify-content-end gap-3 pb-3">
            {steps.slice(0, 3).map((step, idx) => (
              <StepCard key={idx} {...step} />
            ))}
          </div>

          {/* Girl at absolute bottom */}
          <div className="position-relative d-flex align-items-end" style={{ paddingBottom: "0px" }}>
            <img
              src={howLogo}
              alt="Girl"
              style={{
                height: "500px",
                objectFit: "contain",
                zIndex: 4,
              }}
            />
          </div>

          {/* Right Step Cards */}
          <div className="d-flex flex-column justify-content-end gap-3 pb-3">
            {steps.slice(3, 6).map((step, idx) => (
              <StepCard key={idx} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
