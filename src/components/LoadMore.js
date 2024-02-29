import React, { useState } from "react";
import sourceData from "../data/nike-shoes.json";
import ImageGrid from "./ImageGrid";
import styled from "styled-components";

function LoadMore() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(20);
  const [data, setData] = useState([]);

  console.log(data);

  const loadMoreData = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 20);
  };

  const paginateData = () => {
    const newData = sourceData.slice(startIndex, endIndex);
    setData([...data, ...newData]);
  };

  const disable = data.length === 100;

  React.useEffect(() => {
    paginateData();
  }, [startIndex, endIndex]);

  return (
    <Wrapper>
      <ImageGrid data={data} />
      <Button onClick={loadMoreData} disabled={disable}>
        Load More
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
`;

const Button = styled.button`
  display: ${(props) => props.display || "block"};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 10px;
  background-color: hsl(45, 29%, 97%);

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default LoadMore;
