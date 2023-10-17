/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import colors from '../colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
    },
    profile: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.black,
        paddingVertical: 25,
    },
    profilePic: {
        backgroundColor: colors.grey,
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    profileView: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    profileName: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 14,
    },
    profileGmail: {
        color: colors.black,
        fontFamily: 'Lato-Regular',
    },
    content: {
        paddingVertical: 30,
    },
    drawerFlex: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    img: {
        padding: 10,
        marginVertical: 10,
        marginRight: 10,
        height: 10,
        width:10,
    },
    contentText: {
        color: colors.black,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
    },
    logout: {
        height: 50,
        width: 130,
        backgroundColor: colors.SILVER,
        borderRadius: 1,
        borderWidth: 1,
        borderColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutWindow: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.black,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutImage: {
        height: 30,
        width: 30,
    },
    logoutText: {
        color: colors.black,
        paddingLeft: 10,
    },
    contactWindow: {
        backgroundColor: colors.LIGHT_BLUE,
        overflow: 'hidden',
        padding: 5,
        marginTop: 15,
        borderRadius: 15,
    },
    contactContent: {
        color: colors.black,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        padding: 10,
    },
    bcontainer: {
        borderRadius: 15,
        backgroundColor: colors.primary_green,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 15,
        width: width * 0.3,
        height: height * 0.05,
    },
    btext: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
});

export default style;
