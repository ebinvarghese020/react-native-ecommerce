/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../colors';

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.primary_green,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.white,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        padding: 12,
    },
    img: {
        height: 20,
        width: 20,
        tintColor: colors.white,
    },
    dot: {
        fontSize: 70,
        color: colors.white,
        textAlign: 'center',
        marginTop: -50,
    },
});

export default style;
