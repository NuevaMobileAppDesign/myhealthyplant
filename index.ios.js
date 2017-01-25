import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import PlantInterface from './plantInterface.js';
import HelpMessage from './helpMessage.js';

export default class MyHealthyPlant extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 20,
          marginBottom: 50,
          textDecorationLine: 'underline',
        }}>
          My Healthy Plant
        </Text>
        <PlantInterface />
        <HelpMessage />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyHealthyPlant', () => MyHealthyPlant);
