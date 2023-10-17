/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    search: {
        borderWidth: 1,
        borderColor: colors.primary_green,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        width: width * 0.8,
        height: height * 0.07,
    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    textInput: {
        fontFamily: 'Lato-Reglar',
        fontSize: 18,
        marginLeft: 15,
        color: colors.primary_green,
    },
    filter: {
        fontFamily: 'Lato-Bold',
        fontSize: 12,
        color: colors.primary_green,
    },
});

export default style;
