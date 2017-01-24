import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
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
			return <AlbumListItem key={album.title} album={album} />;
		});
	}

	render() {
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}


export default AlbumList;
