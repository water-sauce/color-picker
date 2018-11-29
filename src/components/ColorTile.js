import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const ColorGrid = posed.ul({
  open: {
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { 
    delay: 300 
  }
});


const ColorTile = styled(posed.li({
    open: { 
      opacity: 1 
    },
    closed: { 
      opacity: 0,
      delay: 3000 
    }
  }))`
	display: inline-block;
	height: 64px;
  width: 64px;
  max-height: 64px;
  max-width: 64px;
  margin: 12px;
  
  border-radius: 4px;
  transition: transform .2s ease-in-out;
  -webkit-box-shadow: 0px 0px 5px 0px rgb(197, 197, 197, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgb(197, 197, 197, 1);
  box-shadow: 0px 0px 5px 0px rgb(197, 197, 197, 1);
  background: ${props => props.color || "#FFFFFF"};
  :hover {
  	cursor: pointer;
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  text-align: left;
`;


class ColorTiles extends Component {
  changeColor( color ) {
     this.props.handleClick( color );
  }

	render() {
		return (
		<ColorGrid pose={this.props.isRun ? 'open' : 'closed'} className={this.props.isRun ? 'open' : 'closed'}>
			<Title>{ this.props.title }</Title>
			{ this.props.swatches.map( ( color, index ) => (
			<ColorTile color={ color } key={ color + index } onClick={ () => { this.changeColor( color ) } } />
			))}
		</ColorGrid>
		)
	}
}

// pose={ newSwatch ? 'open' : 'closed'}

export default ColorTiles;