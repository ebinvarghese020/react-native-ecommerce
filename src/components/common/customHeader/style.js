/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height * 0.1,
        backgroundColor: colors.white_level_1,
        color: colors.black,
        paddingHorizontal: 15,
    },
    logo: {
        resizeMode: 'contain',
    },
    textStyle: {
        color: colors.black,
        fontSize: 18,
    },
    menuIcon: {
        resizeMode: 'contain',
        height: height * 0.1,
        width: width * 0.1,
    },
});

export default style;
