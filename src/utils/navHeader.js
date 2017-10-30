// For consistency Headers among all screens , this HOC should be used whenever custom navigationOptions are needed.
// kindly check :https://github.com/react-community/react-navigation/issues/332

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { primaryColor, darkColor, darkGrayColor } from './colors';


export default function(navigationOptions) {
  return function navHeader(Composed) {
    class Composer extends Component {
      static navigationOptions = (...args) =>
        defaultNavOptions(
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

function defaultNavOptions(deafaultOptions) {
  const options = {
    headerTitle: 'My DECKS',
    headerTintColor: primaryColor,
    headerStyle: {
      backgroundColor: darkGrayColor,
      borderWidth: 3,
      borderBottomColor: primaryColor
    },
    ...deafaultOptions
  };
  if (Platform.OS === 'ios') {
    options.headerTitleStyle = { marginBottom: 20 };
  }

  return options;
}
