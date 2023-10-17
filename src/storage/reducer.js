/* eslint-disable prettier/prettier */
import { LOGIN, SIGNOUT, UPDATE } from './constants';

const initialState = {
                userId: '',
                isLoggedIn: false,
                firstName: '',
                lastName: '',
                email: '',
                mobileNo: '',
                profileImage: '',
};
export const inkartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userId: action.payload.userId,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                mobileNo: action.payload.mobileNo,
                isLoggedIn: true,
                profileImage: action.payload.profileImage,
            };
            case SIGNOUT:
            return {
                ...state,
                userId: '',
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                isLoggedIn: false,
            };
            case UPDATE:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                mobileNo: action.payload.mobileNo,
                profileImage: action.payload.profileImage,
            };
        default:
             return state;
    }
};
