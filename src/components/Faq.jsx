import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import myImage from '../assets/logo.png';
import downloadImg from '../assets/download.png'
const FAQSection = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "#252525" }}>
      {/* FAQ Section */}
      <div style={{ paddingBottom: "200px" }}>
        <div className="container text-white pb-5">
          <h2 className="text-center fw-bold mb-5 pt-5">Frequently Asked Questions</h2>

          {/* Inner FAQ Box */}
           <div className="container text-white">
              {/* FAQ Box */}
                <div
                    className="mx-auto p-4"
                    style={{
                    maxWidth: "947px",
                    borderRadius: "10px",
                    backgroundColor: "black",
                    }}
                >
                    <h5 className="fw-bold mb-3 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </h5>
                    <p style={{ color: "#ccc", fontWeight: 400 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                {/* Answer Boxes */}
                <div className="mx-auto mt-4" style={{ maxWidth: "947px" }}>
                    <div
                    className="p-3 mb-2"
                    style={{
                        backgroundColor: "#8E8E8E",
                        color: "#000",
                        fontWeight: "bold",
                        borderRadius: "10px",
                    }}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </div>
                    <div
                    className="p-3"
                    style={{
                        backgroundColor: "#8E8E8E",
                        color: "#000",
                        fontWeight: "bold",
                        borderRadius: "10px",
                    }}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </div>
                </div>
            </div>
       </div>
      </div>

      {/* CTA - Positioned absolutely between FAQ and Footer */}
        <div
      style={{
        width: "896px",
        height: "296px",
        backgroundColor: "#FFB347",
        borderRadius: "40px",
        padding: "40px 60px",
        color: "white",
        position: "absolute",
        top: "calc(100% - 500px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        overflow: "visible",
      }}
    >
      <div className="row align-items-center h-100 position-relative">
        {/* Text Section */}
        <div className="col-md-7">
          <h2 className="fw-bold text-white mb-3" style={{ lineHeight: "1.3" }}>
            Lorem ipsum dolor sit <br /> amet, consectetur
          </h2>
          <p style={{ color: "#fefefe", opacity: 0.7 }}>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="mt-4">
            <button
              className="btn"
              style={{
                backgroundColor: "#49A16C",
                color: "black",
                borderRadius: "30px",
                padding: "10px 24px",
                marginRight: "12px",
                fontWeight: "500",
              }}
            >
              Download App
            </button>
            <button
              className="btn"
              style={{
                backgroundColor: "#49A16C",
                color: "black",
                borderRadius: "30px",
                padding: "10px 24px",
                fontWeight: "500",
              }}
            >
              Download App
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-5 text-end position-relative">
          <img
            src={downloadImg}
            alt="Download App"
            style={{
              height: "260px",
              transform: "rotate(-15deg)",
              marginTop: "-90px",
              marginRight: "-50px",
              borderRadius: "24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              zIndex: 1,
              position: "absolute",
              right: 0,
            }}
          />
        </div>
      </div>
    </div>
      {/* Footer Section */}
      <div style={{ backgroundColor: "#121812", color: "white", paddingTop: "180px", paddingBottom: "40px" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
                {/* Left Column */}
                <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
                        <div className="d-flex align-items-center ">
                            <img src={myImage} alt="logo" height="90" className="me-2 px-20" />
                        </div>
                <div className="mt-3 d-flex gap-3">
                    {[...Array(3)].map((_, idx) => (
                        <div
                        key={idx}
                        style={{
                            width: "43px",
                            height: "44px",
                            borderRadius: "50px",
                            border: "2px solid white",
                            padding: "8px",
                            opacity: 0.5,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        >
                        <i className="bi bi-facebook" style={{ fontSize: "20px", color: "white" }}></i>
                        </div>
                    ))}
                </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6 text-md-end d-flex flex-column justify-content-center align-items-md-end align-items-center">
                        {/* Newsletter */}
                        <h6 className="mb-3 text-white">Newsletter Signup</h6>
                        <div className="d-flex align-items-center mb-3">
                            <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="form-control me-2"
                            style={{
                                borderRadius: "20px",
                                maxWidth: "280px",
                                backgroundColor: "#121812",
                                color: "#fff",
                                border: "1px solid #3ccc87",
                                padding: "10px 16px",
                                fontSize: "14px",
                            }}
                            />
                            <button
                            className="btn rounded-circle"
                            style={{
                                backgroundColor: "#3ccc87",
                                width: "44px",
                                height: "44px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "none",
                                opacity: 0.9,
                            }}
                            >
                            <i className="bi bi-envelope-fill text-white"></i>
                            </button>
                        </div>

                        {/* Copyright */}
                        <small className="text-white-50">© 2025 HeyBobo.ai. All rights reserved.</small>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
