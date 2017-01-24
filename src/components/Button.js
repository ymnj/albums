import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

	const { buttonStyles, textStyles } = styles;


	return (
		<TouchableOpacity onPress={props.onPress} style={buttonStyles}>
			<Text style={textStyles}>Click</Text>
		</TouchableOpacity>
	);
};


const styles = {
	textStyles: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyles: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};

export default Button;
