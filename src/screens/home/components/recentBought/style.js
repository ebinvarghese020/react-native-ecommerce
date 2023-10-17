/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../../../components/common/colors';

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary_green,
        borderRadius: 15,
        margin: 10,
        padding: 20,
    },
    head: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        marginBottom: 10,
        color: colors.black,
    },
    contentView: {
        backgroundColor: colors.white,
        margin: 15,
        padding: 15,
        borderRadius: 15,
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
});

export default style;
