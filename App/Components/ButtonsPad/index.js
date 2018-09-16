import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Button from 'App/Components/Button';

type Props = {
  onButtonPress: () => void
}

class ButtonsPad extends React.PureComponent<Props> {
  render () {
    const { onButtonPress } = this.props;

    return (
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRow}>
          <Button flexible onPress={()=>onButtonPress(1)}>1</Button>
          <Button flexible onPress={()=>onButtonPress(2)}>2</Button>
          <Button flexible onPress={()=>onButtonPress(3)}>3</Button>
        </View>
        <View style={styles.buttonsRow}>
          <Button flexible onPress={()=>onButtonPress(4)}>4</Button>
          <Button flexible onPress={()=>onButtonPress(5)}>5</Button>
          <Button flexible onPress={()=>onButtonPress(6)}>6</Button>
        </View>
        <View style={styles.buttonsRow}>
          <Button flexible onPress={()=>onButtonPress(7)}>7</Button>
          <Button flexible onPress={()=>onButtonPress(8)}>8</Button>
          <Button flexible onPress={()=>onButtonPress(9)}>9</Button>
        </View>
        <View style={styles.buttonsRow}>
          <Button flexible onPress={() => onButtonPress(true)}>True</Button>
          <Button flexible onPress={() => onButtonPress(0)}>0</Button>
          <Button flexible onPress={() => onButtonPress(false)}>False</Button>
        </View>
      </View>
    );
  }
}


export default ButtonsPad;

const styles = StyleSheet.create({
  buttonsContainer: {
    minWidth: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    overflow: 'hidden'
  }
});
