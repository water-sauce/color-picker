import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const ColorGrid = posed.ul({
  open: {
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { 
    delay: 3000 
  }
});


const ColorTile = styled(posed.li({
    open: { 
      opacity: 1 
    },
    closed: { 
      opacity: 1,
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
  componentDidMount() {
    console.log( this.props.newSwatch );
  }

	changeColor( color ) {
		// console.log(color);
     this.props.handleClick( color );
  }

	render() {
		return (
		<ColorGrid pose={this.props.newSwatch ? 'open' : 'closed'}>
			<Title>{ this.props.title }</Title>
			{ this.props.swatches.map( ( color, index ) => (
			<ColorTile color={ color } key={ color + index } onClick={ () => { this.changeColor( color ) } }>
			 { color }
			</ColorTile>
			)
			)}
		</ColorGrid>
		)
	}
}

// pose={ newSwatch ? 'open' : 'closed'}

export default ColorTiles;