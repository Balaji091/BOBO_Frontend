import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from '../assets/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For menu icon

const HeroSection = () => {
  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Navbar */}
        <nav className="d-flex justify-content-between align-items-center px-5 py-3">
        {/* Logo aligned left with padding */}
            <div className="d-flex align-items-center ">
                <img src={myImage} alt="logo" height="90" className="me-2 px-20" />
            </div>

            {/* Right icon with larger font size and spacing */}
            <div className="fs-1 text-white">
                <i className="bi bi-list"></i>
            </div>
        </nav>
      {/* Hero Section */}
        <div className="container py-5">
            <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 mb-5 mb-md-0">
                <h1 className="fw-bold display-5 mb-3">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
                </h1>
                <p className="text-secondary fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className="d-flex gap-3 mt-4">
                <button className="btn btn-light rounded-pill px-5 py-2 fs-5 fw-medium">
                    Action 1
                </button>
                <button className="btn btn-light rounded-pill px-5 py-2 fs-5 fw-medium">
                    Action 2
                </button>
                </div>
            </div>

            {/* Right Content (Mockup device shapes) */}
            <div className="col-md-6 d-flex justify-content-center">
                <div className="position-relative">
                {/* Back rectangle (taller) */}
                <div
                    className="rounded"
                    style={{
                    width: '240px',
                    height: '360px',
                    backgroundColor: '#bdbdbd',
                    borderRadius: '25px',
                    }}
                ></div>

                {/* Front rectangle (shorter, overlaid) */}
                <div
                    className="position-absolute"
                    style={{
                    width: '200px',
                    height: '130px',
                    backgroundColor: '#757575',
                    borderRadius: '25px',
                    bottom: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    }}
                ></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;
