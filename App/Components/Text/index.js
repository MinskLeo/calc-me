import * as React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import colors from 'App/Configs/Colors';
import fonts from 'App/Configs/Fonts';

type Props = {
  children: Any,
  style?: Object,
  align?: 'left' | 'right' | 'center'
}

class TextComponent extends React.PureComponent<Props> {
  render () {
    const { children, align, style } = this.props;
    const alignStyle = {
      textAlign: align
    }

    return (
      <Text style={[styles.content, align ? alignStyle : null, style]}>
        {children}
      </Text>
    );
  }
}

export default TextComponent;

const styles = StyleSheet.create({
  content: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: 35,
    fontFamily: fonts.regularFont
  }
})
