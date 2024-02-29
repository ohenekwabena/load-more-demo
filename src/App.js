import styled from "styled-components";
import LoadMore from "./components/LoadMore";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <LoadMore />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default App;
