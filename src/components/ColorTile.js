import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import PropTypes from 'prop-types';

const ColorGridWrapper = styled.div`
  height: auto;
  max-height: 80%;
  min-height: 80%;
  width: 60%;
  min-width: 320px;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #FFFFFF;
  -webkit-box-shadow: 0px 0px 16px 0px rgb(197, 197, 197, 1);
  -moz-box-shadow: 0px 0px 16px 0px rgb(197, 197, 197, 1);
  box-shadow: 0px 0px 16px 0px rgb(197, 197, 197, 1);
  overflow-x: scroll;
`;

const ColorGrid = styled(posed.ul({
    load: { delayChildren: 100, staggerChildren: 25 },
    unload: { delay: 300 }
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
    init: { scale: 1 },
    hover: { scale: 1.1 },
    load: { scale: 1, opacity: 1, transition: { type: 'spring' } },
    unload: { scale: 0, opacity: 0 }
  }))`
  margin: 12px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 4px 0px rgb(197, 197, 197, 1);
  -moz-box-shadow: 0px 0px 4px 0px rgb(197, 197, 197, 1);
  box-shadow: 0px 0px 4px 0px rgb(197, 197, 197, 1);
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
	render() {
		return (
      <ColorGridWrapper>
        <Title>{this.props.title}</Title>
    		<ColorGrid pose={this.props.swatchChange ? 'load' : 'unload'} >
    			{ this.props.swatches.map( ( color, index ) => (
    			<ColorTile color={ color } key={ color + index } onClick={ () => { this.props.changeColorTile( color ) } } />
    			))}
    		</ColorGrid>
      </ColorGridWrapper>
		)
	}
}


ColorTiles.propTypes = {
  swatchChange: PropTypes.bool,
  swatches: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default ColorTiles;