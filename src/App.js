import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import randomColors from 'randomcolor';
import ColorTiles from './components/ColorTile';
import ColorOptions from './components/ColorOptions';

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

const colorRanges = [ 'red', 'purple', 'blue', 'green', 'orange' ];

class App extends Component {
  state = {
      color: '#ffffff',
      swatches: randomColors({ count: 20 }),
      swatchChange: true
  }

  constructor( props ) {
    super( props );
    this.title = 'Select Color';
    this.changeColorTile = this.changeColorTile.bind(this);
    this.changeColorScale = this.changeColorScale.bind(this);
  }

  changeColorTile( color ){
    this.setState({ color: color });
  }

  changeColorScale( scale ) {
    this.setState({ 
      swatches: randomColors({ hue: scale, count: 20 }),
      swatchChange: false
    })

    setTimeout(
      function() {
        this.setState({ swatchChange: true });
      }.bind(this), 0
    );
  }

  render() {
    const { color } = this.state;
    const { swatches } = this.state;

    return (
      <Container>
        <GlobalStyle color={ color } />
        <ColorOptions changeColorScale={ this.changeColorScale } ranges={ colorRanges } />
        <ColorTiles title={ this.title } swatches={ swatches } changeColorTile={ this.changeColorTile } swatchChange={ this.state.swatchChange } />
      </Container>
    );
  }
}

export default App;









