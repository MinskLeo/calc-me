import * as React from 'react';
import Layout from 'App/Components/SceneWrapper';
import Text from 'App/Components/Text';
import { QuestionType } from 'App/Constants/Types/Question';
import GameEngine from 'App/Services/GameEngine';
import gameConfig from 'App/Configs/Game';
import ButtonsPad from 'App/Components/ButtonsPad';
import QuestionComponent from 'App/Components/Question';
import Progress from 'App/Components/Progress';
import {
  StyleSheet,
  View
} from 'react-native';

type Props = {
  navigation: Object
}

type State = {
  questions: Array<QuestionType>
}

class GameScreen extends React.Component<Props, State> {
  state = {
    questions: [],
    loading: true,
    currentIndex: 0,
    answerValue: '123'
  }

  clearInput = () => {
    this.setState({
      answerValue: ''
    });
  }

  componentDidMount = () => {
    console.log('Generating...')
    const { navigation } = this.props;
    const questionsAmount = navigation.state.params.questionsAmount;

    const questions = GameEngine.generateGame(questionsAmount);
    console.log('Generated! :', questions);
    this.setState({
      questions,
      loading: false
    });
  }

  onButtonPadButtonPress = (value: number | string) => {
    let { answerValue, questions, currentIndex } = this.state;

    switch (typeof value) {
      case 'number':
          // Length check
        if(answerValue.length<gameConfig.maxAnswerLength) {
          answerValue+=value
          this.setState({
            answerValue
          });

          // Answer done check
          if(questions[currentIndex].checkAnswer(answerValue) ) {
            // Game done check
            if ((currentIndex + 1) == questions.length) {
              const gameOverWords = GameEngine.generateCongratsWords();
              this.props.navigation.navigate('GameOverScreen', { gameOverWords })
            } else {
              this.setState({
                currentIndex: currentIndex += 1
              });
              this.clearInput();
            }
          }

          
        }
      break;

      case 'boolean':
        answerValue=value.toString();
        this.setState({
          answerValue
        });
      break;
    }
  }

  render() {
    const { currentIndex, loading, questions, answerValue } = this.state;

    return (
      <Layout>
      {!loading &&
        <View styles={styles.mainContainer}>
          <Progress currentIndex={currentIndex} max={questions.length} />
          <QuestionComponent
            question={questions[currentIndex]}
            answerValue={answerValue}
            clearInput={this.clearInput}
          />
          <ButtonsPad onButtonPress={this.onButtonPadButtonPress}/>
        </View>
      }
      {loading && 
        <Text>Loading...</Text>
      }
      </Layout>
    );
  }
}

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    // minWidth: '100%',
    // minHeight: '100%',
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
