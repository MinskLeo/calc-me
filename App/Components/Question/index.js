import * as React from 'react';
import Text from 'App/Components/Text';
import { QuestionType } from 'App/Constants/Types/Question';
import {
  View,
  StyleSheet
} from 'react-native';
import colors from 'App/Configs/Colors';
import TouchableComponent from 'App/Components/TouchableComponent';

type Props = {
  question: QuestionType,
  answerValue: string,
  clearInput: () => void
}

class Question extends React.PureComponent<Props> {
  renderAnswer = (value: string, onAnswerPress: Function) => {
    if(value) {
      const arrayedValue = Array.from(value);
      return (
        <TouchableComponent style={styles.symbol}
          type='android'
          onPress={()=>onAnswerPress(value)}
        >
          {arrayedValue.map(item => <Text style={styles.answerSymbol}>{item}</Text>)}
        </TouchableComponent>
      );
    }
  }

  
  render () {
    const { question, answerValue, clearInput } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.symbol}>{question.left}</Text>
        <Text style={styles.symbol}>{question.operator}</Text>
        <Text style={styles.symbol}>{question.right}</Text>
        <Text style={styles.symbol}>=</Text>
        {this.renderAnswer(answerValue, clearInput)}
      </View>
    );
  }
}

export default Question;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 35
  },
  symbol: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8
  },
  answerSymbol: {
    marginHorizontal: 3,
    textDecorationColor: colors.textColor,
    textDecorationLine: 'underline'
  }
});
