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
        <div className="footer-main">
          <div className="footer-left">
            <div className="footer-logo-row">
              <img src={AGC} alt="Agastya Global Circuits Logo" className="footer-logo" />
              <span className="footer-company">Agastya Global Circuits</span>
            </div>
            <div className="footer-address">
              # No.9A, 1st Main, Vinayaka Layout,<br />
              Near IIHMR College, Hulimangala, Jigani Hobli,<br />
              Anekal Taluk, Bengaluru – 560105, Karnataka
            </div>
            <div className="footer-contact-row">
              <a href="mailto:contact@agastyaglobalcircuits.com" className="footer-contact">contact@agastyaglobalcircuits.com</a>
              <span className="footer-contact">8555030517</span>
            </div>
            <div className="footer-social-row">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-col">
              <div className="footer-links-title">COMPANY</div>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>          
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-links-col">
              <div className="footer-links-title">PRODUCTS</div>
              <Link to="/products">Our Products</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {getCurrentYear()} Agastya Global Circuits Pvt Ltd. All rights reserved.</p>
        </div>
      </Footer>

    </Wrapper>
  );
}
// Styled Components
const Wrapper = styled.div`
  width: 100%;
  background: #77797dff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 32px 0 rgba(60,72,120,.09);
`;

const Footer = styled.footer`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: transparent;

  .footer-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
  }
  .footer-left {
    min-width: 260px;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .footer-logo-row {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
  }
  .footer-logo {
    width: 64px;
    height: 64px;
    object-fit: contain;
    filter: drop-shadow(0 0 12px #1976d2aa) drop-shadow(0 0 24px #fff3);
    background: transparent;
    border-radius: 12px;
    transition: filter 0.3s;
  }
  .footer-company {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
  }
  .footer-address {
    font-size: 0.95rem;
    color: #f5f5f5;
    line-height: 1.5;
  }
  .footer-contact-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
  }
  .footer-contact {
    color: #fff;
    text-decoration: underline;
    font-weight: 700;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }
  .footer-contact:hover {
    color: #1976d2;
  }
  .footer-social-row {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }
  .footer-social-row a {
    color: #fff;
    font-size: 1.2rem;
    transition: color 0.2s;
  }
  .footer-social-row a:hover {
    color: #1976d2;
  }
  .footer-links {
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
  }
  .footer-links-col {
    min-width: 120px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .footer-links-title {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 6px;
  }
  .footer-links-col a {
    color: #f5f5f5;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;
  }
  .footer-links-col a:hover {
    color: #1976d2;
  }
  .footer-bottom {
    width: 100%;
    text-align: center;
    font-size: 0.95rem;
    color: #e0e0e0;
    border-top: 1px solid #bdbdbd;
    padding-top: 16px;
    margin-top: 16px;
  }
`;
