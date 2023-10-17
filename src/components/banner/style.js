/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../components/common/colors';


const { width, height } = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        width: width * 0.85,
        height: width * 0.4,
        resizeMode: 'contain',
        borderRadius: 15,
        overflow: 'hidden',
        margin: 20,
    },
    innerView: {padding: 15},
    head: {
        fontFamily: 'Lato-Black',
        fontSize: 20,
        color: colors.black,
    },
    content: {
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        color: colors.black,
    },
    touch: {
        backgroundColor: colors.primary_green,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.3,
        margin: 25,
        borderRadius: 15,
    },
    touchText: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.white,
    }
});

export default style;
