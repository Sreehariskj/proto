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
        <div className="intro-container">
          <div className="main-title-container">
            <h1 className="main-title">Catchy Title</h1>
            <div className="main-title-des-container">
              <p className="main-title-des">Description for Catchy Title</p>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="service-container">
          <div className="main-title-container">
            <h1 className="main-title">Our role</h1>
            <div className="main-title-des-container">
              <p className="main-title-des">Description for Our role</p>
            </div>
          </div>
        </div>
      </section>
      <section className="form-section">
        <div className="form-container">
          <form>
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
            <button>Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
