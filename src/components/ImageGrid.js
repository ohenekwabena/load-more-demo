import styled from "styled-components";
import ImageSlider from "./ImageSlider";

function ImageGrid({ data }) {
  console.log(data);
  return (
    <Wrapper>
      {data?.map((item) => (
        <ImageSlider
          key={item["ProductID"]}
          images={item["Images"]}
          price={item["SalePrice"]}
          name={item["ProductName"]}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
`;

export default ImageGrid;
