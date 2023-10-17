/* eslint-disable prettier/prettier */
import { LOGIN, SIGNOUT, UPDATE } from './constants';

export const login = data =>({
    type: LOGIN,
    payload: {
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobileNo: data.mobileNo,
        profileImage: data.profileImage,
    },
});

export const signout = data =>({
    type: SIGNOUT,
    payload: {},
});

export const update = data =>({
    type: UPDATE,
    payload: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobileNo: data.mobileNo,
        profileImage: data.profileImage,
    },
});
