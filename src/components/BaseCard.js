import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import Button from './Button';
import { primaryColor, lightColor } from '../utils/colors';


class BaseCard extends Component {

  flip = () => {
    Animated.spring(this.animatedValue, {
      toValue: this.flipValue >= 90 ? 0 : 180,
      friction: 10,
      tension: 10
    }).start();
  };


  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.flipValue = 0;

    this.animatedValue.addListener(({ value }) => {
      this.flipValue = value;
      if ((value === 0 || value === 180) && this.props.onCompleteFlip) {
        this.props.onCompleteFlip(value === 0);
      }
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });

    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    });

    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    });
  }


  renderQuestion() {
    const { question, order } = this.props;
    const frontAnimatedStyle = {
      transform: [{ rotateX: this.frontInterpolate }]
    };
    return (
      <Animated.View
        style={[
          styles.flipCard,
          frontAnimatedStyle,
          { opacity: this.frontOpacity }
        ]}
      >
        <Card key={question.questionField + order} title={`Question ${order}`}>
          <Text style={{ marginBottom: 20 }}>
            {question.questionField}
          </Text>
          <Button
            icon={{ name: 'eye', type: 'entypo' }}
            backgroundColor={primaryColor}
            title="Get the Answer"
            onPress={() => this.flip()}
          />
        </Card>
      </Animated.View>
    );
  }

  renderAnswer() {
    const { question, order } = this.props;
    const backAnimatedStyle = {
      transform: [{ rotateX: this.backInterpolate }]
    };
    return (
      <Animated.View
        style={[
          styles.flipCardBack,
          backAnimatedStyle,
          styles.flipCard,
          { opacity: this.backOpacity }

        ]}
      >
        <Card
          containerStyle={styles.flipCardBack}
          title={`Answer question ${order}`}
        >
          <Text
            style={{
              marginBottom: 20,
              color: lightColor,
              backgroundColor: primaryColor
            }}
          >
            {question.answer}
          </Text>
          <Button
            icon={{ name: 'emoji-flirt', type: 'entypo', color: primaryColor }}
            backgroundColor={lightColor}
            color={primaryColor}
            title="Great! you get it.."
            onPress={() => this.flip()}
          />
        </Card>
      </Animated.View>
    );
  }
  render() {
    const { question, order } = this.props;
    return (
      <View key={question.questionField + order}>
        {this.renderQuestion()}
        {this.renderAnswer()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flipCard: {
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    backgroundColor: primaryColor
  },
  flipText: {
    width: 90,
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  }
});
export default BaseCard;
