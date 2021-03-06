import React from 'react';
import { Constants } from 'expo';
import { View, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import About from './src/components/About';
import Home from './src/components/Home';
import DeckNew from './src/components/DeckNew';
import DeckBoard from './src/components/DeckBoard';
import CardNew from './src/components/CardNew';
import Quiz from './src/components/Quiz';
import QuizResult from './src/components/QuizResult';
import { primaryColor } from './src/utils/colors';
import { SCREENS } from './src/utils/screens';
import { setLocalNotification } from './src/utils/helpers';


function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

// invoke tab navigator
const Tabs = TabNavigator({
  [SCREENS.HOME]: {
    screen: Home
  },
  [SCREENS.ABOUT]: {
    screen: About,
  }


});

const MainNavigator = StackNavigator({
  [SCREENS.Main]: {
    screen: Tabs,
  },
  [SCREENS.DECK_NEW]: {
    screen: DeckNew
  },
  [SCREENS.DECK_BOARD]: {
    screen: DeckBoard
  },
  [SCREENS.CARD_NEW]: {
    screen: CardNew
  },
  [SCREENS.QUIZ]: {
    screen: Quiz
  },
  [SCREENS.QUIZ_RESULT]: {
    screen: QuizResult
  }



});

class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppStatusBar
            backgroundColor={primaryColor}
            barStyle="light-content"
          />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}


export default App;
