import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const ColorGridWrapper = styled.div`
  height: auto;
  max-height: 80%;
  width: 60%;
  min-width: 320px;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #FFFFFF;
  -webkit-box-shadow: 0px 0px 15px 0px rgb(197, 197, 197, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgb(197, 197, 197, 1);
  box-shadow: 0px 0px 15px 0px rgb(197, 197, 197, 1);
  overflow-x: scroll;
`;

const ColorGrid = styled(posed.ul({
    open: {
      delayChildren: 100,
      staggerChildren: 25
    },
    closed: { 
      delay: 300 
    }
  }))`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 4px;
  list-style: none;
  padding: 0;  
`;



const ColorTile = styled(posed.li({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: { 
      scale: 1.1,
    },
    open: { 
      scale: 1,
      opacity: 1,
      transition: { type: 'spring' }
    },
    closed: {
      scale: 0,
      opacity: 0,
    }
  }))`
  margin: 12px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 5px 0px rgb(197, 197, 197, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgb(197, 197, 197, 1);
  box-shadow: 0px 0px 5px 0px rgb(197, 197, 197, 1);
  background: ${props => props.color || "#FFFFFF"};
  :hover {
  	cursor: pointer;
  }
  :after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;


const Title = styled.h1`
  display: block;
  width: 100%;
  text-align: left;
  margin: 12px;
  font-size: 28px;
`;


class ColorTiles extends Component {
  changeColor( color ) {
     this.props.handleClick( color );
  }

	render() {
		return (
      <ColorGridWrapper>
        <Title>{this.props.title}</Title>
    		<ColorGrid pose={this.props.isRun ? 'open' : 'closed'} >
    			{ this.props.swatches.map( ( color, index ) => (
    			<ColorTile color={ color } key={ color + index } onClick={ () => { this.changeColor( color ) } } />
    			))}
    		</ColorGrid>
      </ColorGridWrapper>
		)
	}
}

// pose={ newSwatch ? 'open' : 'closed'}

export default ColorTiles;