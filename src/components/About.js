import React, { Component } from 'react';
import { View, Text } from 'react-native';
import navHeader from '../utils/navHeader';
import { silverColor } from '../utils/colors';

class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',alignSelf: 'center' }}>
        <Text style={{ color: silverColor, textAlign: 'center', padding: 13, fontSize: 16 }}>
            Hey! I am Mohamed ,Software developer with an enthusiasm for open-source web technologies
        </Text>
      </View>
    );
  }
}

export default navHeader({ headerTitle: 'About Me' })(About);
