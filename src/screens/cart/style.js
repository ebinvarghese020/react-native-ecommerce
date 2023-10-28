/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../components/common/colors';

const { width } = Dimensions.get('screen');
const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.LIGHT_BLUE,
        paddingBottom: 30,
    },
    one: {marginTop: 5},
    productView: {
        width: '100%',
        padding: 15,
        marginRight: 15,
        marginVertical: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    productImage: {width: 75, height: 75, resizeMode: 'contain', alignSelf: 'center', margin: 10},
    nameView: {borderLeftWidth:1, padding: 15, borderColor: colors.black},
    des: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
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
     offerOne: {
        backgroundColor: '#c7ddb5',
        flexDirection: 'row',
        padding: 15,
        paddingVertical: 25,
        color: colors.black,
        justifyContent: 'space-between',
        resizeMode: 'contain',
        overflow: 'hidden',
        borderRadius: 15,
        width: width * 0.9,
        marginLeft: 3,
        marginVertical: 10,
     },
     OfferLeft:{
        color: colors.black,
        flexDirection: 'row',
        alignItems:'center',
     },
     LeftOne: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 34,
     },
     LeftTwo: {
        color: colors.black,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        paddingHorizontal: 3,
     },
     Center: {
        justifyContent: 'center',
        resizeMode: 'contain',
        padding: 5,
     },
     COne: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 18,
         },
    CTwo: {
        color: colors.black,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        fontSize: 12,
    },
    Right: {
        padding: 15,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    ROne: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
    },
    RTwo: {
        color: colors.black,
        fontFamily: 'Lato-Regular',
        textAlign: 'center',
        backgroundColor: colors.primary_green,
        borderRadius: 15,
        padding:5,
        margin: 5,
    },
    bill: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        borderBottomWidth: 1,
     },
     billTopic: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        marginTop: 15,
     },
     bLeft: {
        color: colors.black,
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        paddingVertical: 8,
        textAlign: 'left',
     },
     billLast: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
     },
});

export default style;
