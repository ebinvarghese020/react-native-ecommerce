/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../components/common/colors';


const { width, height } = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: colors.white_level_3,
        color: colors.black,
    },
    main: {
        flex:1,
    },
    footText: {
        fontFamily: 'Lato-Bold',
        fontSize: 25,
        padding:15,
        color: colors.grey,
    },
    footButton: {
        padding: 15,
        backgroundColor: colors.primary_green,
        width: '50%',
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    footButtonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.white,
    }
});

export default style;
