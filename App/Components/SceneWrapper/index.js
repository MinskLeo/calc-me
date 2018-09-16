import * as React from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import colors from 'App/Configs/Colors';

type Props = {
  children: Any
}

class SceneWrapper extends React.Component<Props> {
  render () {
    const { children } = this.props;

    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.content}>
        {children}
      </ScrollView>
    );
  }
}

export default SceneWrapper;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: colors.bg
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    minWidth: '100%',
    minHeight: '100%'
  }
});
