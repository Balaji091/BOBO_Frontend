import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FeatureCard from "./featureCard";

const features = [
  {
    title: "Immersive Fitness Companion",
    points: [
      "Gamified indoor running/cycling experiences",
      "Custom avatars with stats",
      "Leaderboards and challenges",
    ],
  },
  {
    title: "Smart Health Tracker",
    points: [
      "Real-time vitals monitoring",
      "Daily insights",
      "Cross-device sync",
    ],
  },
  {
    title: "Personal Wellness Coach",
    points: [
      "Custom routines & reminders",
      "AI-driven suggestions",
      "Motivational feedback",
    ],
  },
  {
    title: "Mindfulness Assistant",
    points: [
      "Guided meditations",
      "Mood & stress tracking",
      "Focus sessions",
    ],
  },
  {
    title: "Posture Analysis",
    points: [
      "Real-time alerts",
      "Weekly reports",
      "Posture comparison",
    ],
  },
  {
    title: "Social Fitness Mode",
    points: [
      "Group workouts",
      "Avatar chat",
      "Live reactions",
    ],
  },
];




const FeatureCarousel = () => {
  const [page, setPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(features.length / cardsPerPage);
  const startIdx = page * cardsPerPage;
  const currentFeatures = features.slice(startIdx, startIdx + cardsPerPage);

  return (
    <section
      className="py-5 text-center"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <h2 className="mb-5 fw-bold">Features</h2>

      {/* Cards Container */}
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {currentFeatures.map((feature, idx) => (
          <FeatureCard
            key={startIdx + idx}
            title={feature.title}
            points={feature.points}
          />
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="mt-4 d-flex justify-content-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            onClick={() => setPage(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: i === page ? "#fff" : "#3FA46A",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCarousel;
