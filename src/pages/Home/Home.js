import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import "./Home.css";

const Home = () => {
  const [isColor, setIsColor] = useState(false);
  return (
    <div className="container">
      <Header />
      <section className="intro-section">
        <div className="intro-container rn-div align-center">
          <div className="main-title-container">
            <h1 className="main-title title">
              Transform Your Idea To Digital Prototype
            </h1>
            <div className="main-title-des-container">
              <p className="main-title-des des text-light">
                <span className="des-marker">~</span>
                Perfect canvas to build your idea digitally
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="service-container rn-div align-center">
          <div className="main-title-container">
            <h1 className="main-title title">
              We Will Help You To Build Your Digital Prototype
            </h1>
            <div className="main-title-des-container text-light">
              <p className="main-title-des des">
                <span className="des-marker">~</span>
                Build our low cost digital prototype with us
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="form-section">
        <div className="form-container flex justify-center">
          <form className="form-card">
            <InputField label="Name" placeholder="Enter your name" />
            <InputField
              label="Age"
              type="number"
              placeholder="Enter your age"
            />
            <InputField label="Need" placeholder="Make it short and simple" />
            <div>
              <label>Description :</label>
              <textarea rows={10} placeholder="Enter your need description" />
            </div>
            <div className="flex justify-center">
              <input type="submit"></input>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
