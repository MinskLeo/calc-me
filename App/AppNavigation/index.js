import { createStackNavigator } from 'react-navigation';

import ChooseScreen from 'App/Scene/ChooseScreen';
import GameScreen from 'App/Scene/GameScreen';
import GameOverScreen from 'App/Scene/GameOverScreen';

const AppStack = createStackNavigator({
  ChooseScreen: {
    screen: ChooseScreen
  },
  GameScreen: {
    screen: GameScreen
  },
  GameOverScreen: {
    screen: GameOverScreen
  }
},
{
  initialRouteName: 'ChooseScreen',
  navigationOptions: ({props}) => {
    return {
      header: null
    }
  }
});

export default AppStack;