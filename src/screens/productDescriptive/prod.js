/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../components/common/colors';

const Define = (props) => {
    const [press, setPress] = useState(false);
    const handlePress = () => {
        setPress(!press);
    };
    return (
        <View style={{padding: 10, borderBottomWidth: 1, borderBottomColor: colors.black,}}>
            <TouchableOpacity onPress={handlePress}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{
                    color: colors.black,
                    fontFamily: 'Lato-Bold',
                    fontSize: 18,
                }}>{props.head}</Text>
                <Text style={{
                    color:colors.black,
                    fontFamily: 'Lato-bold',
                    fontSize: 14,
                }}>V</Text>
            </View>
            </TouchableOpacity>
            {press ? <Text style={{
                color: colors.black,
                fontFamily: 'Lato-Regular',
                fontSize: 12,
                paddingTop: 5,
            }}>{props.body} </Text>
            : null}
        </View>
    );
};

export default Define;