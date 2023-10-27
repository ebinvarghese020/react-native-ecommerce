/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import colors from '../colors';


const style = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.LIGHT_BLUE,
    },
    one: {marginTop: 15},
    productView: {
        width: '100%',
        padding: 15,
        marginRight: 15,
        marginVertical: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        overflow: 'hidden'
    },
    productImage: {width: 75, height: 75, resizeMode: 'contain', alignSelf: 'center', margin: 10},
    nameView: {borderLeftWidth:1, padding: 15, borderColor: colors.black},
    des: {flexDirection: 'row', alignItems: 'center',  marginTop: 15,justifyContent: 'space-between',},
    desu: {flexDirection: 'row', justifyContent: 'space-between'},
    texts: { fontFamily: 'Lato-Bold', fontSize: 18, color: colors.black},
    textsOne: { fontFamily: 'Lato-Regular', fontSize: 14, color: colors.black},
    offer: {
        padding: 5,
        borderRadius: 15,
        backgroundColor: colors.primary_green,
        marginHorizontal: 10,
    },
    offerText: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.white,
        marginHorizontal: 10,
    },
    qunView: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.primary_green,
        overflow: 'hidden',
        padding: 5,
        marginTop: 15,
     },
     qunText1: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.black,
        marginHorizontal: 10,
     },
     qunText2: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.black,
     },
});

export default style;
