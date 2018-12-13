import React, { Component } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  border-radius: 5px;
  ${awesomeCard}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Input placeholder="Hello" />
        </Container>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

export default App;
