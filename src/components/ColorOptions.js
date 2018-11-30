import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import PropTypes from 'prop-types';

const ColorOptionWrapper = styled.ul`
	min-width: 100%;
	margin: 1rem 0 0;
	padding: 0;
	list-style: none;
	text-align: center;
	white-space: nowrap;
`;

const ColorOption = styled.li`
	display: inline-block;
	margin: 0 8px;
	padding: 4px 12px;
	border-radius: 50px;
	font-weight: bold;
	background: #FFFFFF;
	color: ${props => props.color || "#222222"};
	:hover {
		cursor: pointer;
	}
`;

class ColorOptions extends Component {
	render() {
		return (
			<ColorOptionWrapper>
				{ this.props.ranges.map( ( range, index ) => (
				<ColorOption color={ range } onClick={ () => { this.props.changeColorScale( range ) } } key={ range + index }>{ range }</ColorOption>
				)
				)}
			</ColorOptionWrapper>
		)
	}
}

ColorTiles.propTypes = {
  ranges: PropTypes.array
};

export default ColorOptions;