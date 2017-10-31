import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field, reset, untouch } from 'redux-form';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Button from './Button';
import { addDeck } from '../actions';
import { primaryColor } from '../utils/colors';
import { SCREENS } from '../utils/screens';
import { FORMS } from '../utils/forms';
import navHeader from '../utils/navHeader';

class DeckNew extends Component {

  onSubmit = values => {
    this.props.addDeck(values.deck);
    this.props.dispatch(reset(FORMS.NEW_DECK));
    this.props.dispatch(untouch(FORMS.NEW_DECK));
    this.deck.clearText();
    this.props.navigation.navigate(SCREENS.DECK_BOARD, { deck: values.deck });
  };


  renderInput = ({ input, meta: { touched, error }, ...rest }) => {
    const { label, ...inputProps } = rest;
    return (
      <View>
        <FormLabel>
          {label}
        </FormLabel>
        <FormInput
          onChangeText={input.onChange}
          {...input}
          {...inputProps}
          ref={element => {
            this[input.name] = element;
          }}
        />
        <FormValidationMessage>
          {touched && error ? error : null}
        </FormValidationMessage>
      </View>
    );
  };
  // https://redux-form.com/6.0.0-alpha.4/docs/api/reduxform.md/
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Field
          name="deck"
          component={this.renderInput}
          label="Deck Name"
          placeholder="Please enter a name for your new deck "
        />
        <Button
          icon={{ name: 'plus', type: 'entypo' }}
          title="Add"
          backgroundColor={primaryColor}
          containerViewStyle={{ marginTop: 15 }}
          onPress={this.props.handleSubmit(this.onSubmit)}
        />
      </View>
    );
  }
}

function validate(values, ownProps) {
  const errors = {};
  if (!values.deck)
  { errors.deck = 'Deck name cannot be empty,please enter a new one!'; }
  else if (ownProps.decks.find(d => d === values.deck)) {
    errors.deck = `"${values.deck}" sorry!..it's already existed! try another one`;
  }
  return errors;
}


function mapStateToProps(state) {
  const { decks } = state;
  return { decks };
}

const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck) => dispatch(addDeck(deck)),
});


export default navHeader({ headerTitle: 'CREATE NEW DECK' })(
  connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({
      validate,
      form: FORMS.NEW_DECK
    })(DeckNew)
  )
);
