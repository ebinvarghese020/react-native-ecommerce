/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../components/common/colors';

const { width, height } = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: height * 0.25,
        backgroundColor: colors.LIGHT_BLUE,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 15,
        overflow: 'hidden',
    },
    containerInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    image: {
        width: 150,
        height: 100,
    },
    innerOne: {
        borderTopColor: colors.black,
        borderTopWidth: 1,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textID: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
    },
    textGreen: {
        color: colors.primary_green,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
    },
    textRest: {
        color: colors.black,
        fontFamily: 'Lato-Regular',
        fontSize: 12,
        },
    textOrder: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
    },
});

export default style;
