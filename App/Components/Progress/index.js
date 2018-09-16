import * as React from 'react';
import Text from 'App/Components/Text';
import {
  View,
  StyleSheet
} from 'react-native'

type Props = {
  currentIndex: number | string,
  max: number | string
}

class Progress extends React.PureComponent<Props> {
  

  render () {
    const { currentIndex, max } = this.props;
    const progress = `${currentIndex + 1}/${max}`;

    return (
      <View style={styles.wrapper}>
        <Text>{progress}</Text>
        <Text style={styles.timer}>{'0.25s'}</Text>
      </View>
    );
  }
}

export default Progress;


const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    width: 100,
    marginLeft: 20,
    fontSize: 23
  }
})