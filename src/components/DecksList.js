import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements';
import { primaryColor, lightColor, neutreDarkColor } from '../utils/colors';
import { SCREENS } from '../utils/screens';


class DecksList extends Component {

  // https://react-native-training.github.io/react-native-elements/API/lists/

  renderRow = (deck, secId) => {
    const badge = {
      value: deck.questions.length,
      textStyle: { color: lightColor },
      containerStyle: { backgroundColor: primaryColor }
    };

    return (
      <ListItem
        key={secId + deck.name}
        title={deck.name}
        titleStyle={{ fontWeight: '900', color: neutreDarkColor }}
        badge={badge}
        onPress={() =>
          this.props.navigate(SCREENS.DECK_BOARD, { deck: deck.name })}
      />
    );
  };

  render() {

    return (
      <List style={{ flex: 1, backgroundColor: lightColor }}>
        {this.props.decks.map(this.renderRow)}
      </List>
    );
  }
}


DecksList.PropTypes = {
  decks: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const { decks, questions } = state;
  return {

    decks: decks.map(name => ({
      name,
      questions: questions.filter(question => question.deck === name)
    }))
  };
}




export default connect(mapStateToProps)(DecksList);
