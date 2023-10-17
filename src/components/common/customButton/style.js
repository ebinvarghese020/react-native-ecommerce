/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const style = StyleSheet.create({
    button:{
        padding: width * 0.04,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: width * 0.025,
        flexDirection: 'row',
    },
    icon: {
        width: width * 0.08,
        height: height * 0.04,
        marginRight: width * 0.04,
    },
});

export default style;
