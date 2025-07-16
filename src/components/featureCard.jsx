import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import featureLogo from "../assets/feature.png";
import featureLine from "../assets/featureLine.png";
const FeatureCard = ({ title, points }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    backgroundColor: hover ? "#3FA46A" : "#0F1F17",
    color: hover ? "#000" : "#fff",
    border: "1px solid #3FA46A",
    borderRadius: "18px",
    padding: "24px",
    transition: "all 0.3s ease-in-out",
    position: "relative",
    cursor: "pointer",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const imageWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "12px",
  };

  const iconStyle = {
    height: "38px",
    marginBottom: "8px",
    filter: hover ? "brightness(0)" : "brightness(1)", // black on hover
  };

  const lineStyle = {
    height: "8px",
    width: "80px",
    filter: hover ? "brightness(0)" : "brightness(1)",
  };

  const pointerStyle = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    fontSize: "28px",
    display: hover ? "block" : "none",
  };

  return (
    <div
      style={cardStyle}
      className="w-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={imageWrapperStyle}>
        <img src={featureLogo} alt="icon" style={iconStyle} />
        <img src={featureLine} alt="line" style={lineStyle} />
      </div>

      <h5 className="fw-bold mt-2">{title}</h5>
      <ul className="text-start mt-3 mb-0">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

    </div>
  );
};
export default FeatureCard