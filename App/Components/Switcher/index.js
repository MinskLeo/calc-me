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
  selectedValue: string,
  onPress: () => void
}

class Switcher extends React.PureComponent<Props> {
  renderSwitchers = () => {
    const { values, onPress, selectedValue } = this.props;

    return values.map( item => {
      const active = item === selectedValue;

      return (
        <TouchableComponent
          type='android'
          onPress={()=>onPress(item)}
          style={[styles.switcher,
            active ? styles.activeSwitcher : null]}
          >
          <Text style={styles.switcherText}>{item}</Text>
        </TouchableComponent>
      );
    })
  }

  render () {
    return (
      <View style={styles.wrapper}>
        {this.renderSwitchers()}
      </View>
    );
  }
}

export default Switcher;

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
