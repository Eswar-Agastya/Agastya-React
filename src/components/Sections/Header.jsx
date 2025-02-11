import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

// Components
import FullButton from "../Buttons/FullButton";
// Assets
import ClientSlider from "../Elements/ClientSlider";

import HeaderImage from "../../assets/img/header-img.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

// import { Link } from "react-scroll";
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/domains/automotive.png";
import ProjectImg2 from "../../assets/img/domains/commercial.png";
import ProjectImg3 from "../../assets/img/domains/plain1.png";
// import ProjectImg4 from "../../assets/img/domains/plain1.png";
// import ProjectImg5 from "../../assets/img/domains/plain2.jpg";
// import ProjectImg6 from "../../assets/img/domains/plan.jpg";

export default function Header() {
  return (
    <Wrapper id="home">
      <HeaderSection className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">We are Agastya Global Circuits.</h1>
            <HeaderP className="font15 semiBold">
              We are dedicated to revolutionizing the electronics manufacturing industry with our commitment to innovation, quality, and customer satisfaction. 
              Specializing in advanced circuit design and fabrication, we provide a comprehensive range of services tailored to meet the diverse needs of our clients across various sectors.
            </HeaderP>
            <BtnWrapper>
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                <FullButton title="Get Started"/>
              </Link>
            </BtnWrapper>
          </div>
        </LeftSide>
        <RightSide>
          <ImageWrapper>
            <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} />
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>Empowering Innovation Through Quality and Precision.</em>
                </p>
                <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Agastya</p>
              </div>
            </QuoteWrapper>
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </ImageWrapper>
          <GreyDiv className="lightBg"></GreyDiv>
        </RightSide>
      </HeaderSection>

      {/* New Section */}
      <AdditionalSection>
        
        <div className="whiteBg">
        <div className="container">
        <HeaderInfoWrapper> 
          <MultiColorText> Our <span className="textRed">Industries</span> 
          </MultiColorText> 
          </HeaderInfoWrapper>
          
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <plain />
              <ProjectBox
                img={ProjectImg1}
                title="Automotive"
                text=""
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Commercial and Industrial"
                text=""
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              {/* <img src={ProjectImg3} alt="" style={{ width:"20%" }}/> */}
              <ProjectBox
                img={ProjectImg3}
                title="Defence"
                text=""
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="75W AC-DC Series"
                text=""
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="100W AC-DC Series"
                text=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="500W AC-DC Series"
                text=""
                // action={() => alert("clicked")}
              />
            </div>
          </div> */}
          
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <ExtraContentWrapper>
          <ImgWrapper><Img className="radius8" src={ExtraImage1} alt="extra-img1" /></ImgWrapper>
          <TextSection>
            <h2 className="font40 extraBold">Leading The Future of Electronics</h2>
            <p className="font15">
              Our cutting-edge circuit solutions and services drive innovation and efficiency in the electronics industry.
            </p>
          </TextSection>
        </ExtraContentWrapper>
        <ExtraContentWrapper>
          <ImgWrapper><Img className="radius8" src={ExtraImage2} alt="extra-img2" /></ImgWrapper>
          <TextSection>
            <h2 className="font40 extraBold">Precision and Reliability</h2>
            <p className="font15">
              We are committed to delivering products that meet the highest standards of precision and reliability.
            </p>
          </TextSection>
        </ExtraContentWrapper> */}
      </AdditionalSection>
      <AdditionalSection1>
      <HeaderInfoWrapper> 
          <MultiColorText> Our <span className="textRed">Clients</span> 
          </MultiColorText> 
          </HeaderInfoWrapper>
          <div className="lightBg" style={{ padding: "50px 0" }}>
                  <div className="container">
                    <ClientSlider />
                  </div>
                </div>
                <ButtonWrapper> <Link activeClass="active" style={{width:"400px", padding: "10px 15px" } } to="services" spy={true} smooth={true} offset={-80} > 
                <FullButton title="Let's Know About Our Products"/> </Link> </ButtonWrapper>
      </AdditionalSection1>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  padding-top: 80px;
  width: 100%;
`;

const HeaderSection = styled.section`
  margin-top: 50px;
  min-height: 840px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;

const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const AdditionalSection = styled.div`
  padding: 10px 0;
  background-color: #f9f9f9;
`;

const ExtraContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px auto;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const TextSection = styled.div`
  padding: 20px;
`;


const HeaderInfoWrapper = styled.div` text-align: center; padding: 20px; .font13 { font-size: 13px; } `; 
const MultiColorText = styled.h1` font-size: 40px; font-weight: 800; & > .textRed { color: #7620ff; } `;

const AdditionalSection1 = styled.div`
  padding: 20px 0;
  background-color: #f9f9f9;
`;
const ButtonWrapper = styled.div` 
  display: flex; justify-content: center; 
  align-items: center; 
  height: 100px; 
  /* Adjust the height according to your need */
   `; 

// const FullButton = styled.button` /* Add your button styles here */ padding: 10px 15px; background-color: #4CAF50; /* Example background */ color: white; border: none; border-radius: 3px; cursor: pointer; `