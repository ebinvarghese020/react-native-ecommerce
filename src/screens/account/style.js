/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../components/common/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        height: height,
        width: width,
        alignItems: 'center',
        padding: 15,
    },
    boxContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.black,
        margin: 15,
    },
    profileImg: {
        height: 120,
        width: 120,
        overflow: 'hidden',
    },
    bigImage: {
        width: width * 0.8,
        height : width * 0.8,
    },
    editContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
      },
    editView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    edit: {
        backgroundColor: colors.primary_green,
        borderRadius: 20,
        height: 25,
        width: 25,
    },
    editImg: {
        height: 25,
        width: 25,
    },
    textInput: {
        margin: 15,
        marginVertical: 30,
    },
    modelBack: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    editImgRed: {
        backgroundColor: colors.white,
        borderRadius: 25,
        position:'absolute',
        zIndex: 0,
        right: -150,
        top: -350,
        height: 50,
        width: 50,
    },
});

export default style;
