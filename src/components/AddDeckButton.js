import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { getWidth, getHeight } from '../utils/helpers';
import { darkGreen } from '../utils/colors';
import { SCREENS } from '../utils/screens';

function AddDeckButton({ navigate }) {
  return (
    <View
      style={[
        styles.addDeckBtnContainer,
        { top: getHeight() - 220, left: getWidth() - 110 }
      ]}
    >
      <Icon
        reverse
        name="plus"
        type="entypo"
        color={darkGreen}
        containerStyle={{ borderRadius: Platform.OS === 'ios' ? 5 : 28 }}
        onPress={() => navigate(SCREENS.DECK_NEW)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addDeckBtnContainer: {
    position: 'absolute'
  }
});

export default AddDeckButton;
