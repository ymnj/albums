import React from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumListItem = (props) => {
	
	return (
		<Card>
			<CardSection>
				<Text>{props.album.title}</Text>
			</CardSection>
		</Card>
	);
};

export default AlbumListItem;
