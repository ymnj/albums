import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import AlbumListItem from './AlbumListItem';


class AlbumList extends Component {

	state = {
		albums: []
	};


	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then((res) => {
				this.setState({
					albums: res.data
				});
			});
	}

	renderAlbums() {
		return this.state.albums.map((album) => {
			return <Text key={album.title}>{album.title}</Text>
		});
	}

	render() {
		return (
			<View>
				<Text>Album List</Text>
				{this.renderAlbums()}
			</View>
		);
	}
}


export default AlbumList;
