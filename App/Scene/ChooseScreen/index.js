import * as React from 'react';
import Layout from 'App/Components/SceneWrapper';
import Text from 'App/Components/Text';
import Button from 'App/Components/Button';
import gameConfig from 'App/Configs/Game';

import Switcher from 'App/Components/Switcher';
import SwitcherMulti from 'App/Components/SwitcherMulti';

import {
  View,
  StyleSheet
} from 'react-native';

type Props = {
  navigation: Object
}

type State = {
  mode: 'Simple' | 'Advanced',
  difficulty: 'Easy' | 'Medium' | 'Hard',
  operators: Array
}

class ChooseScreen extends React.Component<Props, State> {
  state = {
    mode: 'Simple',
    difficulty: 'Medium',
    operators: ['+']
  }

  onCountButtonPress = (count: number) => {
    this.props.navigation.navigate('GameScreen', { questionsAmount: count })
  }

  onChangeModePress = mode => {
    this.setState({ mode });
  }

  onChangeDifficultyPress = difficulty => {
    this.setState({ difficulty });
  }

  onChangeOperatorsPress = operators => {
    this.setState({ operators: [...operators] });
  }

  render () {
    const { mode, difficulty, operators } = this.state;
    const modes = ['Simple', 'Advanced'];
    const difficulties = ['Easy', 'Medium', 'Hard'];
    const operatorValues = gameConfig.availableOperators;

    return (
      <Layout>

        <Text>Choose difficulty</Text>
          <View style={[styles.switcherContainer, styles.switcherContainerDiffuculty]}>
            <Switcher
              values={modes}
              selectedValue={mode}
              onPress={this.onChangeModePress}
            />
          </View>

        {mode === 'Simple' &&
        <View style={styles.modeContainer}>
          <View style={styles.switcherContainer}>
            <Switcher
              values={difficulties}
              selectedValue={difficulty}
              onPress={this.onChangeDifficultyPress}
            />
          </View>
          <View style={styles.buttons}>
            <Button onPress={() => this.onCountButtonPress(1)}>1</Button>
            <Button onPress={() => this.onCountButtonPress(10)}>10</Button>
            <Button onPress={() => this.onCountButtonPress(20)}>20</Button>
            <Button onPress={() => this.onCountButtonPress(30)}>30</Button>
          </View>
        </View>
        }

        {mode === 'Advanced' &&
        <View style={styles.modeContainer}>
          <View style={styles.switcherContainer}>
            <SwitcherMulti
              values={operatorValues}
              selectedValues={operators}
              onPress={this.onChangeOperatorsPress}
            />
          </View>
        </View>
        }
          
          
      </Layout>
    );
  }
}

export default ChooseScreen;

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  switcherContainerDiffuculty: {
    marginTop: 20
  },
  switcherContainer: {
    height: 40,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  modeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
});
