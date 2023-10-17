/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.primary_green,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 15,
        width: width * 0.8,
        height: height * 0.05,
    },
    text: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
});

export default style;
