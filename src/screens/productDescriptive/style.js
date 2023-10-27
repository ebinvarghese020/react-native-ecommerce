/* eslint-disable prettier/prettier */

import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../components/common/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    like: {
        alignSelf: 'flex-end',
        width: 50,
        height: 50,
    },
    image: {
        height: width * 0.6,
        width: width * 0.6,
    },
    box: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginTop: 30,
        padding: 25,
        flex: 1,
    },
    mainHeading: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
    },
    star: {
        height: 30,
        width: 30,
    },
    ratingContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    ratingText: {
        alignSelf: 'center',
        marginLeft: 20,
        color: colors.grey,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
    },
    priceContainer: {
        flexDirection: 'row',
    },
    priceText: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    },
    offerText: {
        color: colors.primary_green,
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        marginLeft: 10,
        alignSelf: 'center',
    },
    boxp: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    ptext: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        margin: 10,
        backgroundColor: colors.LIGHT_GREY,
        padding: 10,
        color: colors.black,
    },
    scroll: {
        flex: 1,
        padding: 10,
    },
})

export default style;
