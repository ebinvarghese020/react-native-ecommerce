/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../colors';

const { width, height } = Dimensions.get('screen');
const style = StyleSheet.create({
    icon:{
        width: width * 0.04,
        height: height * 0.02,
    },
    textEntry:{
        color: colors.black_level_3,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        width:width * 0.8,
        height: height * 0.05,
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.secondary_green,
        padding: width * 0.02,
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: colors.grey,
    },
});

export default style;
