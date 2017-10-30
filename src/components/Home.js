import React, { Component } from 'react';
import { View } from 'react-native';
import DecksList from './DecksList';
import AddDeckButton from './AddDeckButton';
import navHeader from '../utils/navHeader';

class Home extends Component {
  render() {
    //https://reactnavigation.org/docs/navigators/navigation-prop
    return (
      <View style={{ flex: 1 }}>
        <DecksList navigate={this.props.navigation.navigate} />
        <AddDeckButton navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

export default navHeader({ headerTitle: 'Decks Home Page' })(Home);
