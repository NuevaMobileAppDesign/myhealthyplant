import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet} from 'react-native';

export default class HelpMessage extends Component {
  render() {
    return (
      <Text style={styles.textDisplay}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  textDisplay: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666',
  },
})

AppRegistry.registerComponent('HelpMessage', () => HelpMessage);
