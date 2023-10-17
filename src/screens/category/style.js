/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../components/common/colors';

const style = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        backgroundColor: colors.white_level_1,
    },
    catImage: {
        width: 150,
        height: 120,
        resizeMode: 'contain',
        margin: 10,
    },
    catFlatStyle: {
        padding: 10,
        backgroundColor: colors.LIGHT_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    catTouch: {
        borderBottomColor: colors.black_level_3,
        borderBottomWidth: 1,
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backImage: {
        width: 200,
        height: 180,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: colors.black,
        margin: 10,
    },
    catName: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        textAlign: 'left',
        color: colors.black,
    },
    catDesc: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        textAlign: 'left',
        color: colors.black,
    },
    proStyle: {
        justifyContent: 'center',
        padding: 10,
    },
    propImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        margin: 10,
    },
    proContainer: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBg: {
        backgroundColor: colors.LIGHT_BLUE,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15,
    },
    proName: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.black,
    },
    proDesc: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.black,
    },
});

export default style;
