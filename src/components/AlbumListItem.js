import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumListItem = ({ album }) => {
	
	const { title, artist, thumbnail_image, image, url } = album;

	const {
		headerContentStyle,
		thumbnailStyle,
		thumbnailContainerStyle,
		titleStyle,
		imageStyle
	} = styles;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
				</View>
				<View style={headerContentStyle}>
					<Text style={titleStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>
			<CardSection>
				<Button onPress={ () => { Linking.openURL(url) } } />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		marginLeft: 10,
		marginRight: 10
	},
	titleStyle: {
		fontWeight: 'bold',
		fontSize: 18
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumListItem;
