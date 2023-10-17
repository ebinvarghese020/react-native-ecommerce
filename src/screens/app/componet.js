/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';

import {View, Image} from 'react-native';

const ActionBarImage = () => {
  return (
    <View >
      <Image
        source={require('../../assets/images/shopping-cart.png')}
        style={{
          width: 30,
          height: 30,
          marginRight: 25,
        }}
      />
    </View>
  );
};
export default ActionBarImage;
