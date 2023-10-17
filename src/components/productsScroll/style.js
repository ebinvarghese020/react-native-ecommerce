/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../../components/common/colors';


const style = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.white,
    },
    headView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        },
    headText: {
        fontFamily: 'Lato-Bold',
        fontSize: 12,
        color: colors.black,
    },
    contentText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.black,
    },
    seeAll: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.black,
    },
});

export default style;
