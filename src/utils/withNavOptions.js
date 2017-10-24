/**
 *  For consistency Headers among all screens , this HOC should be used whenever
  custom navigationOptions are needed.
 * kindly check :https://github.com/react-community/react-navigation/issues/332

 
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { primaryColor, darkColor } from './colors';

function commonNavOptions(otherOptions) {
  const options = {
    headerTitle: 'DECKS',
    headerTintColor: primaryColor,
    headerStyle: {
      backgroundColor: darkColor,
      borderWidth: 3,
      borderBottomColor: primaryColor
    },
    ...otherOptions
  };
  if (Platform.OS === 'ios') {
    options.headerTitleStyle = { marginBottom: 20 };
  }

  return options;
}


export default function(navigationOptions) {
  return function withNavOptions(Composed) {
    class Composer extends Component {
      static navigationOptions = (...args) =>
        commonNavOptions(
          typeof navigationOptions === 'function'
            ? navigationOptions(...args)
            : navigationOptions
        );

      render() {
        return <Composed {...this.props} />;
      }
    }
    return Composer;
  };
}
