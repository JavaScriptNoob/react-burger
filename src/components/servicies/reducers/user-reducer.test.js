import {
    CHANGE_DETAILS_FAILED,
    CHANGE_DETAILS_REQUEST,
    CHANGE_DETAILS_SUCCESS,
    LOGIN_REQUEST_FAILED,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_USER_REQUEST,
    REGISTER_REQUEST_FAILED,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_USER_REQUEST,
    RESET_REQUEST,
    RESET_SUCCESS,
    RESET_FAILED,
    SIGN_OUT_FAILED,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SENT_EMAIL,
    SENT_EMAIL_SUCCESS,
    SENT_EMAIL_FAILED,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILED
} from "./index-reducer"

import {initialState, userReducer} from "./user-reducer";

describe("It is tect that cover functionality of USER REDUCER and trying to execute following action types" +
    "CHANGE_DETAILS_FAILED CHANGE_DETAILS_REQUEST  CHANGE_DETAILS_SUCCESS"+
    "LOGIN_REQUEST_FAILED, LOGIN_REQUEST_SUCCESS, LOGIN_USER_REQUEST, REGISTER_REQUEST_FAILED "+
    "REGISTER_REQUEST_SUCCESS,    REGISTER_USER_REQUEST,    RESET_REQUEST,    RESET_SUCCESS,    RESET_FAILED,    SIGN_OUT_FAILED,    SIGN_OUT_REQUEST,    SIGN_OUT_SUCCESS,    SENT_EMAIL"+
    "SENT_EMAIL_SUCCESS, SENT_EMAIL_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED", ()=>{
    it("should handle REGISTER_USER_REQUEST correctly", () => {
        const action = {
            type: REGISTER_USER_REQUEST,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            requestProcessing: true,
        });
    });

    it("should handle REGISTER_REQUEST_SUCCESS correctly", () => {
        const action = {
            type: REGISTER_REQUEST_SUCCESS,
            response: { accessToken: "token", refreshToken: "refresh" },
            token: "token",
            email: "user@example.com",
            name: "John Doe",
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            requestSuccess: true,
            responseBody: action.response,
            userToken: action.token,
            requestProcessing: false,
            requestFailed: false,
            email: action.email,
            name: action.name,
        });
    });

    it("should handle REGISTER_REQUEST_FAILED correctly", () => {
        const action = {
            type: REGISTER_REQUEST_FAILED,
            err: "Registration failed.",
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            errBody: action.err,
            requestFailed: true,
        });
    });

    it("should handle LOGIN_USER_REQUEST correctly", () => {
        const action = {
            type: LOGIN_USER_REQUEST,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            loginRequest: true,
        });
    });

    it("should handle LOGIN_REQUEST_SUCCESS correctly", () => {
        const action = {
            type: LOGIN_REQUEST_SUCCESS,
            response: {
                accessToken: "token",
                refreshToken: "refresh",
                user: { email: "user@example.com", name: "John Doe" },
            },
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            loginSuccess: true,
            loginRequest: false,
            userToken: action.response.accessToken,
            refreshToken: action.response.refreshToken,
            email: action.response.user.email,
            name: action.response.user.name,
        });
    });

    it("should handle LOGIN_REQUEST_FAILED correctly", () => {
        const action = {
            type: LOGIN_REQUEST_FAILED,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            loginSuccess: false,
            loginRequest: false,
            loginFailed: true,
        });
    });

    it("should handle CHANGE_DETAILS_REQUEST correctly", () => {
        const action = {
            type: CHANGE_DETAILS_REQUEST,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            changeDetailSuccess: false,
            changeDetailRequest: true,
            changeDetailFailed: false,
        });
    });

    it("should handle CHANGE_DETAILS_SUCCESS correctly", () => {
        const action = {
            type: CHANGE_DETAILS_SUCCESS,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            changeDetailSuccess: true,
            changeDetailRequest: false,
            changeDetailFailed: false,
        });
    });
    it("should handle CHANGE_DETAILS_FAILED correctly", () => {
        const action = {
            type: CHANGE_DETAILS_FAILED,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            changeDetailSuccess: false,
            changeDetailRequest: false,
            changeDetailFailed: true
        });
    });

    it("should handle SIGN_OUT_FAILED correctly", () => {
        const action = {
            type: SIGN_OUT_FAILED,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            resetRequest: false,
            resetSuccess: false,
            resetFailed: true,
        });
    });

    it("should handle SENT_EMAIL correctly", () => {
        const action = {
            type: SENT_EMAIL,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            forgoPasswordRequest: true,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: false,
        });
    });

    it("should handle SENT_EMAIL_SUCCESS correctly", () => {
        const action = {
            type: SENT_EMAIL_SUCCESS,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            forgoPasswordRequest: false,
            forgotPasswordSuccess: true,
            forgotPasswordFailed: false,
        });
    });

    it("should handle SENT_EMAIL_FAILED correctly", () => {
        const action = {
            type: SENT_EMAIL_FAILED,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            forgoPasswordRequest: false,
            forgotPasswordSuccess: false,
            forgotPasswordFailed: true,
        });
    });

    it("should handle GET_USER_REQUEST correctly", () => {
        const action = {
            type: GET_USER_REQUEST,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            getUserRequest: true,
            getUserSuccess: false,
            getUserFailed: false,
        });
    });

    it("should handle GET_USER_SUCCESS correctly", () => {
        const user = {
            email: "test@example.com",
            name: "Test User",
        };

        const action = {
            type: GET_USER_SUCCESS,
            user: user,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            getUserRequest: false,
            getUserSuccess: true,
            getUserFailed: false,
            email: user.email,
            name: user.name,
        });
    });

    it("should handle GET_USER_FAILED correctly", () => {
        const action = {
            type: GET_USER_FAILED,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            getUserRequest: false,
            getUserSuccess: false,
            getUserFailed: true,
        });
    });
    it("should handle RESET_REQUEST correctly", () => {
        const action = {
            type: RESET_REQUEST,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            resetRequest: true,
            resetSuccess: false,
            resetFailed: false
        });
    });
    it("should handle RESET_SUCCESS correctly", () => {
        const action = {
            type:RESET_SUCCESS,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            resetRequest: false,
            resetSuccess: true,
            resetFailed: false
        });
    });
    it("should handle RESET_FAILED correctly", () => {
        const action = {
            type:RESET_FAILED,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            resetRequest: false,
            resetSuccess: false,
            resetFailed: true
        });
    });
    it("should handle SIGN_OUT_REQUEST correctly", () => {
        const action = {
            type: SIGN_OUT_REQUEST,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            resetRequest: false,
            resetSuccess: false,
            resetFailed: true
        });
    });
    it("should handle SIGN_OUT_SUCCESS correctly", () => {
        const action = {
            type: SIGN_OUT_SUCCESS,
        };

        const nextState = userReducer(initialState, action);

        expect(nextState).toEqual({
            ...initialState,
            userToken: "",
            requestProcessing: false,
            requestSuccess: false,
            requestFailed: false,
            responseBody: [],
            errBody: [],
            email: '',
            name: '',
            loginRequest: false,
            loginSuccess: false,
            loginFailed: false,
            refreshToken: '',
            resetRequest: false,
            resetSuccess: false,
            resetFailed: false,
            exitRequest:false,
            exitSucess:false,
            exitFailed:false,
            refetchRequest: false,
            rerefetchSuccess: false,
            refetchFailed: false,
            changeDetailRequest:false,
            changeDetailSuccess:false,
            changeDetailFailed:false,
        });
    });
});

