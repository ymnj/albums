import React from 'react';
import { View, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View>
      <Header headerText={"Album"}/>
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);

