import {
    FETCH_CHATS_SUCCESS,
    FETCH_CHATS_FAIL,
    SET_CHAT_ACTIVE_USER,
    FETCH_USER_SUCCESS,
} from "./chat.actionTypes";

const INITIAL_STATE = {
    activeChat: {},
    chatList: [],
    user:{}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CHATS_SUCCESS:
            return {
                ...state,
                chatList: action.payload,
            };
        case FETCH_CHATS_FAIL:
            return {
                ...state,
            };
        case SET_CHAT_ACTIVE_USER:
            return {
                ...state,
                activeChat: action.payload,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user:action.payload
            };
        // case FETCH_CHATS_FAIL:
        //     return {
        //         ...state,
        //     };
        default:
            return state;
    }
};
