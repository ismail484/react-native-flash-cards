import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import StartQuizButton from './StartQuizButton';
import Button from './Button';
import PropTypes from 'prop-types';
import { primaryColor, lightColor, silverColor, neutreColor } from '../utils/colors';
import { SCREENS } from '../utils/screens';
import navHeader from '../utils/navHeader';

function DeckBoard(props) {
  const { deck } = props.navigation.state.params;
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text h1>
          {deck}
        </Text>
        <Text h8>
          {props.questions.length} cards
        </Text>
      </View>
      <View style={{ flex: 1, alignSelf: 'stretch' }}>
        <Button
          icon={{
            name: 'credit-card-plus',
            type: 'material-community',
            size: 50
          }}
          title="Add New Card"
          backgroundColor={primaryColor}
          containerViewStyle={styles.btnContainer}
          onPress={() => props.navigation.navigate(SCREENS.CARD_NEW, { deck })}
        />
      </View>
      {props.questions.length === 0 &&
        <View style={{ flex: 1 }}>
          <Text style={styles.notification}>
            Sorry, You don't have any cards in this deck!please try first to Add cards (questions) to be able
            to start Quiz on "{deck}" deck.
          </Text>
        </View>}
      {props.questions.length > 0 &&
        <View style={{ flex: 1 }}>
          <StartQuizButton deck={deck} navigate={props.navigation.navigate} />
        </View>}
      <View style={{ flex: 1 }}>
        <Button
          raised
          icon={{ name: 'cached', size: 30 }}
          title="Switch Your Favourite Deck"
          backgroundColor={neutreColor}
          containerViewStyle={styles.btnContainer}
          onPress={() => props.navigation.navigate(SCREENS.HOME)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  notification: {
    color: silverColor,
    textAlign: 'center',
    padding: 13
  },
  btnContainer: {
    marginTop: 13
  }
});

function mapStateToProps(state, ownProps) {
  const { questions } = state;
  const { deck } = ownProps.navigation.state.params;
  return { questions: questions.filter(q => q.deck === deck) };
}

DeckBoard.PropTypes = {
  questions: PropTypes.array.isRequired,
};

export default navHeader(({ navigation }) => ({
  headerTitle: navigation.state.params.deck
}))(connect(mapStateToProps, null)(DeckBoard));
