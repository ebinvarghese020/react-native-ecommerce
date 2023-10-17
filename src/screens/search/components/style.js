/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../../components/common/colors';

const style = StyleSheet.create({
    main: {
        flex: 1,
        padding: 15,
        margin: 10,
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.black,
    },
    flatList: {
        alignItems: 'center',
        marginVertical: 15,
    },
    container: {
        backgroundColor: colors.white_level_1,
    },
    imageContainer: {
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: colors.LIGHT_BLUE,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
});

export default style;
