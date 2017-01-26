import React, { Component } from 'react';
import { AppRegistry, Text, Image } from 'react-native';

export default class PlantImage extends Component {
  render() {
    if (this.props.amountWater < 10) {
      return (
        <Text style={{color: 'red'}}>
          no plant yet, keep watering!
        </Text>
      );
    }
    else {
      var height = 300;
      if (this.props.amountWater < 30) {
        height = 300 + 3 * this.props.amountWater;
      }
      else {
        height = 525;
      }

      return (
        <Image
          source={{uri: 'https://farm6.staticflickr.com/5022/5590591853_074f1c2c3b_m.jpg'}}
          style={{width: 200, height: height}}
        />
      );
    }
  }
}

AppRegistry.registerComponent('PlantImage', () => PlantImage);

