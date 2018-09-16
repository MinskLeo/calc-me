import * as React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import TouchableComponent from 'App/Components/TouchableComponent';
import Text from 'App/Components/Text';

type Props = {
  children: Any,
  width?: number | string,
  height?: number | string,
  flexible?: boolean,
  styleWrapper?: Object,

  onPress: () => void
}

class Button extends React.PureComponent<Props> {
  render () {
    const { children, onPress, width, height, flexible } = this.props;
    const sizeStyle = {};

    if(width && height) {
      sizeStyle.width = width;
      sizeStyle.heigt = height;
    } else if(flexible) {
      sizeStyle.height = 80;
      sizeStyle.flex = 1;
    }
    

    return (
      <TouchableComponent
        type='android'
        onPress={onPress}
      >
        <View style={[styles.content, sizeStyle]}>
          <Text>{children}</Text>
        </View>
      </TouchableComponent>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  content: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
