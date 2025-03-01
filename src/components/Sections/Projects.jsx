import React from "react";
import styled from "styled-components";
// Assets
import ProductImg1 from "../../assets/img/projects/AC_DC121.png";
import ProductImg2 from "../../assets/img/projects/AC_DC12.png";
import ProductImg3 from "../../assets/img/projects/DC-DC1.png";
import ProductImg4 from "../../assets/img/projects/BLDC1.png";
import ProductImg5 from "../../assets/img/projects/DC-Motor-Controller1.png";
import ProductImg6 from "../../assets/img/projects/pcb.png";



export default function Products() {
  const productData = [
    {
      img: ProductImg1,
      title: "AC - DC Converter",
      description: [
        "Voltage Range : 5V - 24V",
        "OutPut Power : 40W - 100W",
      ],
      link: "",
    },
    {
      img: ProductImg2,
      title: "AC - DC Converter",
      description: [
        "Voltage Range : 12V - 54V",
        "OutPut Power : 500W",
      ],
      link: "",
    },
    {
      img: ProductImg3,
      title: "DC - DC Converter",
      description: [
        "Input Voltage : 36V - 120v",
        "OutPut : 5V - 72V & UpTo 10A",
      ],
      link: "",
    },
    {
      img: ProductImg4,
      title: "BLDC Fan Controller",
      description: [
        "Input AC Range : 190V - 260V",
        "Output DC Power : 35W",
      ],
      link: "",
    },
    {
      img: ProductImg5,
      title: "DC Motor Controller",
      description: [
        "Input Voltage : 12V - 16V",
        "Output Power : 50W - 250W",
      ],
      link: "",
    },
    {
      img: ProductImg6,
      title: "PCB Fabrication",
      description: [
        "Multilayer PCBs Upto - 40 Layers",
      ],
      link: "",
    },
  ];

  return (
    <Wrapper id="products">
      <Container>
        <Header>
          <h1>Our Products</h1>
        </Header>
        <ProductGrid>
          {productData.map((product, index) => (
            <ProductCard key={index} href={product.link}>
              <ImageWrapper>
                <img src={product.img} alt={product.title} />
              </ImageWrapper>
              <CardContent>
                <h3>{product.title}</h3>
                <Description>
                  {product.description.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </Description>
              </CardContent>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductCard = styled.a`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  width: calc(33.33% - 20px);
  max-width: 350px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 300px; /* Set a fixed height for all images */
    object-fit: cover; /* Ensures the image covers the area */
    display: block;
  }
`;


const CardContent = styled.div`
  padding: 20px;
  text-align: center;
  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: 1px solid #7620ff;
  }
`;

const Description = styled.div`
  p {
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #0B093B;
  }
`;
