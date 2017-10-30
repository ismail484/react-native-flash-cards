import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { reduxForm, Field, reset, untouch } from 'redux-form';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Button from './Button';
import navHeader from '../utils/navHeader';
import { addQuestion } from '../actions';
import { primaryColor } from '../utils/colors';
import { SCREENS } from '../utils/screens';
import { FORMS } from '../utils/forms';


class CardNew extends Component {
  handleSubmit = values => {
    const { deck } = this.props.navigation.state.params;
    this.props.addQuestion({ ...values, deck });
    this.props.navigation.navigate(SCREENS.DECK_BOARD, { deck });
    this.props.dispatch(reset(FORMS.NEW_CARD));
    this.props.dispatch(untouch(FORMS.NEW_CARD));
    this.reset();
  };

  reset = () => {
    this.questionField.clearText();
    this.answer.clearText();
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
  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <Field
          name="questionField"
          component={this.renderInput}
          label="Question"
          placeholder="What's in your mind .... ?"
        />
        <Field
          name="answer"
          component={this.renderInput}
          label="Answer"
          placeholder="Please write your ideas .... "
        />
        <Button
          icon={{ name: 'plus', type: 'entypo' }}
          title="Add New Card"
          backgroundColor={primaryColor}
          containerViewStyle={{ marginTop: 18 }}
          onPress={this.props.handleSubmit(this.handleSubmit)}
        />
      </View>
    );
  }
}


function validate(values) {
  const errors = {};
  if (!values.questionField) {
    errors.questionField = 'please enter the question !';
  }

  if (!values.answer) {
    errors.answer = 'please enter the answer!';
  }
  return errors;
}




const mapDispatchToProps = (dispatch) => ({
  addQuestion: (question) => dispatch(addQuestion(question)),
});


function mapNavOptions({ navigation }) {
  return {
    headerTitle: `NEW ${navigation.state.params.deck.toUpperCase()} CARD`
  };
}

export default navHeader(mapNavOptions)(
  connect(null, mapDispatchToProps)(
    reduxForm({
      validate,
      form: FORMS.NEW_CARD
    })(CardNew)
  )
);
