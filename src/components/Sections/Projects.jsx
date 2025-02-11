import React from "react";
import styled from "styled-components";
// Assets
import ProductImg1 from "../../assets/img/projects/2.jpeg";
import ProductImg2 from "../../assets/img/projects/2.jpeg";
import ProductImg3 from "../../assets/img/projects/3.webp";
import ProductImg4 from "../../assets/img/projects/3.webp";

export default function Products() {
  const productData = [
    {
      img: ProductImg1,
      title: "AC-DC Converter",
      description: [
        "Voltage Range from 5V - 24V.",
        "Current Range from 40W - 100W.",
      ],
      link: "/products/ac-dc-converter",
    },
    {
      img: ProductImg1,
      title: "AC-DC Converter",
      description: [
        "Voltage Range from 12V - 54V.",
        "Current Range from 500W.",
      ],
      link: "/products/ac-dc-converter",
    },
    {
      img: ProductImg2,
      title: "DC - DC Converter",
      description: [
        "Explore our 30W AC-DC Series.",
        "Compact and efficient power solutions.",
      ],
      link: "/products/30w-ac-dc-series",
    },
    {
      img: ProductImg3,
      title: "BLDC Fan Controller",
      description: [
        "Discover our 60W AC-DC Series.",
        "Ideal for medium power applications.",
      ],
      link: "/products/60w-ac-dc-series",
    },
    {
      img: ProductImg4,
      title: "DC Motor Controller",
      description: [
        "Learn about our 75W AC-DC Series.",
        "Efficient solutions for demanding needs.",
      ],
      link: "/products/75w-ac-dc-series",
    },
    {
      img: ProductImg4,
      title: "PCB Fabrication",
      description: [
        "Learn about our 75W AC-DC Series.",
        "Efficient solutions for demanding needs.",
      ],
      link: "/products/75w-ac-dc-series",
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
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
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
