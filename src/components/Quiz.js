import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Swiper from 'react-native-xswiper';
import Card from './Card';
import QuizHints from './QuizHints';
import { neutreLightColor } from '../utils/colors';
import { SCREENS } from '../utils/screens';
import { score as calculateScore } from '../utils/helpers';
import { swipedLeft, swipedRight, swipedFinish, finishQuiz } from '../actions';
import withNavOptions from '../utils/withNavOptions';

class Quiz extends Component {

  state = {
    questionsLength: this.props.navigation.state.params.questions.length,
    correctAnswer: 0,
    wrongAnswer: 0
  };

  onCompleteSwipe = direction => {
    this.setState(
      ({ correctAnswer, wrongAnswer, questionsLength }) => ({
        correctAnswer: direction === 'right' ? correctAnswer + 1 : correctAnswer,
        wrongAnswer: direction === 'left' ? wrongAnswer + 1 : wrongAnswer,
        questionsLength: questionsLength - 1
      }),
      () => {
        if (this.completed) {
          this.onCompleteLastSwipe();
        }
      }
    );
  }

  onCompleteLastSwipe() {
    const { deck, questions } = this.props.navigation.state.params;
    const { correctAnswer, wrongAnswer } = this.state;

    // 👇🏻 A middleware will intervent here to reset the push notification
    this.props.finishQuiz({
      deck,
      score: calculateScore(correctAnswer, wrongAnswer)
    });
    this.props.navigation.navigate(SCREENS.QUIZ_RESULT, {
      correctAnswer,
      wrongAnswer,
      deck,
      questions
    });
  }

  get completed() {
    return this.state.questionsLength === 0;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text h1>
            {this.props.navigation.state.params.deck}
          </Text>
          {this.state.questionsLength > 0 &&
            <Text h5>
              {this.state.questionsLength} need to finish
            </Text>}
        </View>
        <View style={styles.cardsContainer}>
          <Swiper
            data={this.props.navigation.state.params.questions}
            onReleaseSwipe={() => this.props.swipedFinish()}
            onSwipeLeft={() => this.props.swipedLeft()}
            onSwipeRight={() => this.props.swipedRight()}
            onCompleteSwipeLeft={() => this.onCompleteSwipe('left')}
            onCompleteSwipeRight={() => this.onCompleteSwipe('right')}
            renderCard={(question, index) =>
              <Card question={question} order={index + 1} />}
          />
        </View>
        <QuizHints />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cardsContainer: {
    flex: 4,
    backgroundColor: neutreLightColor,
    padding: 10,
    alignSelf: 'stretch'
  }
});

export default withNavOptions({ headerTitle: 'Quiz' })(
  connect(null, { swipedLeft, swipedRight, swipedFinish, finishQuiz })(Quiz)
);
