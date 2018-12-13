import React, { Component } from "react";
import styled from "styled-components";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Hello</Button>
        <Button>Styled Component</Button>
      </div>
    );
  }
}

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
`;

export default App;
