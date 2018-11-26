import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import randomColors from 'randomcolor';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    background-color: ${({ color }) => color};
    transition: background-color 100ms ease-in-out;
    font-family: Helvetica;
  }
  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



class App extends Component {
  state = {
    color: '#ffffff',
    swatches: randomColors({ count: 20 }),
  }

  render() {
    const { color } = this.state;
    return (
      <Container>
        <GlobalStyle color={color} />
        <h1>Replace With Implementation</h1>
      </Container>
    );
  }
}

export default App;
