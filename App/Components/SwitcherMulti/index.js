import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Text from 'App/Components/Text';
import TouchableComponent from 'App/Components/TouchableComponent';
import colors from 'App/Configs/Colors';

type Props = {
  values: Array<string>,
  selectedValues: Array<string>,
  onPress: () => void
}

class SwitcherMulti extends React.PureComponent<Props> {

  onSwitcherPress = value => {
    let { selectedValues, onPress } = this.props;
    // +
    // -

    // -


    const element = selectedValues.findIndex( item => item === value);
    if(element >= 0) {
      selectedValues.splice(element, 1);
    } else {
      selectedValues[selectedValues.length] = value;
    }

    onPress(selectedValues);
  }

  renderSwitchers = () => {
    const { values, onPress, selectedValues } = this.props;

    return values.map(item => {
      const isActive = selectedValues.find( activeValue => activeValue === item)

      return (
        <TouchableComponent
          type='android'
          onPress={() => this.onSwitcherPress(item)}
          style={[styles.switcher,
          isActive ? styles.activeSwitcher : null]}
        >
          <Text style={styles.switcherText}>{item}</Text>
        </TouchableComponent>
      );
    })
  }

  render() {
    console.log('PROPS: ', this.props);
    return (
      <View style={styles.wrapper}>
        {this.renderSwitchers()}
      </View>
    );
  }
}

export default SwitcherMulti;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '100%',
    // borderWidth: 3,
    // borderColor: colors.activeBg
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: colors.border
  },
  switcher: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switcherText: {
    fontSize: 18,
  },
  activeSwitcher: {
    backgroundColor: colors.activeBg
  }
});
