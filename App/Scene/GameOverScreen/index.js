import * as React from 'react';
import Layout from 'App/Components/SceneWrapper';
import Text from 'App/Components/Text';
import TouchableComponent from 'App/Components/TouchableComponent';
import colors from 'App/Configs/Colors';

import {
  StyleSheet
} from 'react-native';

type Props = {
  navigation: Object
}

class GameOverScreen extends React.Component<Props> {
  onBackButtonClick = () => {
    this.props.navigation.navigate('ChooseScreen');
  }

  render () {
    const { navigation } = this.props;

    return (
      <Layout>
        <Text>{navigation.state.params.gameOverWords}</Text>
        <TouchableComponent
          type='android'
          style={styles.button}
          onPress={this.onBackButtonClick}
        >
          <Text style={styles.buttonText}>{'> Back to menu <'}</Text>
        </TouchableComponent>
      </Layout>
    );
  }
}

export default GameOverScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    padding: 20
  },
  buttonText: {
    // textDecorationColor: colors.textColor,
    // textDecorationLine: 'underline'
  }
})
