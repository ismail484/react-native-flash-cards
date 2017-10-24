import React, { Component } from 'react';
import { View } from 'react-native';
import DecksList from './DecksList';
import AddDeckButton from './AddDeckButton';
import withNavOptions from '../utils/withNavOptions';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 2 }}>
        <DecksList navigate={this.props.navigation.navigate} />
        <AddDeckButton navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

export default withNavOptions({ headerTitle: 'Decks Home Page' })(Home);
