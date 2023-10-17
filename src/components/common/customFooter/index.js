/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {View, Text, Image } from 'react-native';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomFooter = ({state, descriptors, navigation}) => {
  return (
    <View style={style.container}>
        {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const icon =
            route.name === 'Home'
            ? require('../../../assets/images/home.png')
            : route.name === 'Categories'
            ? require('../../../assets/images/category.png')
            : route.name === 'Search'
            ? require('../../../assets/images/search.png')
            : route.name === 'Offers'
            ? require('../../../assets/images/offer.png')
            : route.name === 'Cart'
            ? require('../../../assets/images/shopping-cart.png')
            : ('../../../assets/images/email.png');
        return (
            <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style = {style.main}>
            {isFocused ? <Text style={style.dot}>.</Text> : null}
            <Image source={icon} style={style.img}/>
            <Text style={style.text}>{route.name}</Text>
            </TouchableOpacity>
        );
        }
        )}
    </View>
  );
};

export default CustomFooter;
