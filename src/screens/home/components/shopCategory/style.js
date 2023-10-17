/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../../../components/common/colors';

const style = StyleSheet.create({
    container: {
        margin: 25,
    },
    head: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        marginBottom: 10,
        color: colors.black,
        textAlign: 'center',
    },
    flatList: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerView: {
        backgroundColor: colors.white,
        overflow:'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginBottom: 15,
        borderRadius: 15,
    },
    itemName: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.black,
        padding: 10,
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
});

export default style;
