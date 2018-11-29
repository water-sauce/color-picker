import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const ColorOptionWrapper = styled.ul`
	list-style: none;
	padding: 0;
	text-align: center;
`;

const ColorOption = styled.li`
	display: inline-block;
	margin: 0 8px;
	padding: 4px 12px;
	border-radius: 50px;
	background: #FFFFFF;
	color: ${props => props.color || "#222222"};
	:hover {
		cursor: pointer;
	}
`;

class ColorOptions extends Component {
	handleColorChange( scale ) {
		// console.log( scale );
        this.props.changeColorScale( scale );
    }

	render() {
		return (
		<ColorOptionWrapper>
			{ this.props.ranges.map( ( range, index ) => (
			<ColorOption color={ range } onClick={ () => { this.handleColorChange( range ) } } key={ range + index }>{ range }</ColorOption>
			)
			)}
		</ColorOptionWrapper>
		)
	}
}

export default ColorOptions;