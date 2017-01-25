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
      var height = 200;
      if (this.props.amountWater < 30) {
        height = 200 + 3 * this.props.amountWater;
      }
      else {
        height = 425;
      }

      return (
        <Image
          source={{uri: 'https://www.silksareforever.com/images/thumbnails/175/175/detailed/21/GTD445-BT.jpg'}}
          style={{width: 200, height: height}}
        />
      );
    }
  }
}

AppRegistry.registerComponent('PlantImage', () => PlantImage);

