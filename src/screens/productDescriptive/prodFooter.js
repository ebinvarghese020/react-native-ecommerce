/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../components/common/colors';
import CustomSearch from '../../components/common/customSearch';

const Footer = (props) => {
    const [press, setPress] = useState(false);
    const handlePress = () => {
        setPress(!press);
    };
    return (
        <View>
            <Text style={{
                    color: colors.black,
                    fontFamily: 'Lato-Bold',
                    fontSize: 18,
                    marginTop: 10,
                }}>ChecK Delivery</Text>
            <Text style={{
                    color: colors.grey,
                    fontFamily: 'Lato-Regular',
                    fontSize: 12,
                    marginTop: 10,
                }}>Enter pincode to check if delivery is available to the location</Text>
            <CustomSearch text="Check" />
            <Text style={{
                    color: colors.black,
                    fontFamily: 'Lato-Regular',
                    fontSize: 14,
                    padding:5,
                    lineHeight: 20,
                }}>Free delivery on orders above 2000.00 RS {'\n'}Cash on delivery available {'\n'}Easy 21 days return and exchange</Text>
        </View>
    );
};

export default Footer;

export const AddToCart = () => {
    return (
        <View style={{backgroundColor: colors.primary_green, borderRadius: 10, padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
            <View style={{backgroundColor: colors.white, borderRadius: 5, flexDirection: 'row', padding: 10}}>
                <Text style={{color: colors.black, paddingHorizontal: 10}}>-</Text>
                <Text style={{color: colors.black}}>0</Text>
                <Text style={{color: colors.black, paddingHorizontal: 10}}>+</Text>
            </View>
            <Text style={{alignSelf: 'center', color: colors.white}}>Add To Cart</Text>
        </View>
    );
};
