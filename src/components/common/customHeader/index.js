/* eslint-disable prettier/prettier */

import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';

const CommonHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Image
          source={require('../../../assets/images/more.png')}
          style={style.menuIcon}
        />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/images/logo.jpg')}
        style={style.logo}
      />
    </View>
  );
};

export default CommonHeader;
