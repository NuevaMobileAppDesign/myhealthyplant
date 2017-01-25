import React, { Component } from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import PlantImage from './plantImage.js';

export default class PlantInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountWater: 0,
    };
  }

  onPressGrowButton() {
    this.setState({amountWater: this.state.amountWater + 1});
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.onPressGrowButton()}
          title="Water the plants!"
        />
        <Text style={{textAlign: 'center'}}>
          {this.state.amountWater} cups of water
        </Text>
        <PlantImage amountWater={this.state.amountWater} />
      </View>
    );
  }
}

AppRegistry.registerComponent('PlantInterface', () => PlantInterface);

