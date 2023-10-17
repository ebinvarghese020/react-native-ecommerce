/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../components/common/colors';


const stylee = ( width, height) => StyleSheet.create({
    container: {
        backgroundColor: colors.white_level_1,
        height: height * 0.98,
    },
    topBg:{
        width: width,
        height: height * 0.2 ,
        resizeMode: 'cover',
    },
    scrollView:{
        flex: 1,
        backgroundColor: colors.white_level_1,
        marginTop: -width * 0.2,
        borderTopRightRadius: width * 0.05,
        borderTopLeftRadius: width * 0.05,
        overflow: 'hidden',
        padding: width * 0.03,
        paddingVertical: width * 0.04,
    },
    logo:{
        width: width * 0.4,
        height: width * 0.2 ,
        resizeMode: 'contain',
    },
    loginText:{
        fontFamily:'Lato-Bold',
        fontSize: 25,
        color: colors.steel,
    },
    createText: {
        fontFamily:'Lato-Regular',
        fontSize: 14,
        color: colors.steel,
        textAlign: 'center',
        marginVertical: width * 0.02,
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary_green,
        borderRadius: width * 0.02,
        padding: width * 0.04,
    },
    footertext:{
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: colors.steel,
        marginVertical:10,
    },
    dotOuter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        flex: 1,
        height: 1,
        borderStyle:'dashed',
        borderWidth: 1,
    },
    dotText: {
        textAlign: 'center',
        color: 'black',
        padding: 6,
    },
});

export default stylee;
