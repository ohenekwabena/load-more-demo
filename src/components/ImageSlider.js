import { useState } from "react";
import styled from "styled-components";
import { COLORS, WEIGHTS } from "../constants";
import { formatPrice } from "../util";

function ImageSlider({ images, price, name }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(images);

  return (
    <div>
      <Wrapper>
        <ImageWrapper>
          {images?.map(
            (image, index) =>
              image && <CurrentImg key={image} alt={name} src={image} show={currentSlide === index ? 1 : 0} />
          )}
        </ImageWrapper>
        <IndicatorWrapper>
          {images?.map((_, index) => (
            <Indicator
              key={index}
              onClick={() => setCurrentSlide(index)}
              active={currentSlide === index ? 1 : 0}
            ></Indicator>
          ))}
        </IndicatorWrapper>
      </Wrapper>
      <Row>
        <Name>{name}</Name>
        <Price>{formatPrice(price)}</Price>
      </Row>
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0px 0px 7px #666;
  overflow: hidden;
`;

const CurrentImg = styled.img`
  display: ${({ show }) => (show ? "block" : "none")};
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: transform 200ms ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

const IndicatorWrapper = styled.span`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

const Indicator = styled.button`
  background-color: ${({ active }) => (active ? "#ffffff" : "gray")};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
  transition: transform 100ms cubic-bezier(0.55, 0.055, 0.675, 0.19);

  &:hover {
    transform: scale(1.2);
  }
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: ${COLORS.gray[700]};
`;

export default ImageSlider;
