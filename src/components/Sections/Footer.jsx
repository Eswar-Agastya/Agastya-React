import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AGC from "../../assets/img/AGC Logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS

export default function Contact() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <Footer>
        <div className="footer-section">
          <h3>ABOUT US</h3>

          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt" style={{ marginRight: "8px" }}></i>
              <a href="https://maps.app.goo.gl/pCQWv11tfkwPCBGb6" target="_blank" rel="noopener noreferrer" style={{ color: "silver" }}>
              AGASTYAGLOBALCIRCUITS PVT, LTD,<br />
              # No.9A,1st Main, Vinayaka Layout,<br />
              Near IIHMR College, Hulimangala, Jigani Hobli, Anekal Taluk, Bengaluru-560105. 
              </a>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope" style={{ marginRight: "8px" }}></i>
              <a href="mailto:contact@agastyaglobalcircuits.com" style={{ color: "silver", display: "block" }}>contact@agastyaglobalcircuits.com</a><br />
            </div>
            {/* <div className="info-item">
              <i className="fas fa-envelope" style={{ marginRight: "8px" }}></i>
              <a href="mailto:career@synedynesystems.com" style={{ color: "silver", display: "block" }}>career@synedynesystems.com</a>
            </div> */}
            <div className="info-item">
              <i className="fas fa-phone-alt" style={{ marginRight: "8px" }}></i>
              <a href="tel:8555030517" style={{ color: "silver" }}>8555030517</a>
            </div>
          </div>
          <br></br>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li><Link to="/services" style={{ color: "silver" }}>Services</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>PRODUCTS</h3>
          <ul>
            <li><Link to="/products" style={{ color: "silver" }}>Our Products</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><Link to="/contact" style={{ color: "silver" }}>Contact</Link></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Agastya Global Circuits Pvt Ltd. All rights reserved.</p>
        </div>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Footer = styled.footer`
  background-color: #222;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 20px;
    color: silver;
    font-family: Arial, sans-serif;
  }

  .footer-section h3 {
    border-bottom: 2px solid silver;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
  }

  .footer-section ul li {
    margin: 10px 0;
  }

  .footer-section ul li a {
    color: silver;
    text-decoration: none;
  }

  .footer-section ul li a:hover {
    text-decoration: underline;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .info-item {
    display: flex;
    align-items: center;
    text-align: centre;
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons a {
    color: silver;
    font-size: 22px;
  }

  .footer-bottom {
    text-align: center;
    width: 100%;
    margin-top: 20px;
    color: silver;
  }
`;

