import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactImg1 from "../../assets/img/contact-1.jpg";
import ContactImg2 from "../../assets/img/contact-2.jpg";
import ContactImg3 from "../../assets/img/contact-3.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/contacts", formData);
      console.log("Form data submitted successfully:", response.data);
      toast.success("Form submitted successfully!", { autoClose: 10000, hideProgressBar: false });
      setFormData({
        fname: "",
        email: "",
        mobile: "",
        message: ""
      });
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      toast.error("Form submission failed. Please try again.", { autoClose: 10000, hideProgressBar: false });
    }
  };
  

  return (
    <Wrapper id="contact">
      <ToastContainer autoClose={5000} hideProgressBar={false} />  {/* Set autoClose and hideProgressBar here */}
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13"><br /></p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit}>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" value={formData.fname} onChange={handleChange} />
                <label className="font13">Email:</label>
                <input type="email" id="email" name="email" className="font20 extraBold" value={formData.email} onChange={handleChange} />
                <label className="font13">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" className="font20 extraBold" value={formData.mobile} onChange={handleChange} />
                <label className="font13">Message:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" value={formData.message} onChange={handleChange} />
                <SubmitWrapper className="flex">
                  <ButtonWrapper>
                    <ButtonInput type="submit" value="Send Message" />
                  </ButtonWrapper>
                </SubmitWrapper>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-top: 100px;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    margin-bottom: 30px;
  }
  input {
    height: 50px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonInput = styled.input`
  background-color: #7620ff !important;
  color: #fff !important;
  border: 1px solid #7620ff;
  padding: 15px;
  cursor: pointer;
  width: 100%;
  max-width: 220px;
  border-radius: 8px;
  outline: none;
  :hover {
    background-color: #580cd2 !important;
    border: 1px solid #580cd2 !important;
    color: #fff !important;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
