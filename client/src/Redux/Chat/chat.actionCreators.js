import {FETCH_CHATS_FAIL, SET_CHAT_ACTIVE_USER, FETCH_USER_SUCCESS} from "./chat.actionTypes";
import {FETCH_CHATS_SUCCESS} from "./chat.actionTypes";
import Axios from "axios";

export const fetchChats = () => {
    return dispatch => {
        console.log("chats");
        Axios.get("http://localhost:8000/api/user", {
            headers: {
                token: localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        })
            .then(user => {
                console.log(user);
                dispatch(fetchChatsSuccess(user.data.chats));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

function fetchChatsSuccess(payload) {
    return {
        type: FETCH_CHATS_SUCCESS,
        payload,
    };
}

function fetchChatsFail() {
    return {
        type: FETCH_CHATS_FAIL,
    };
}

// export function setChatUser(payload) {
//     return dispatch => {

//     };
// }
export function setChatActiveUser(payload) {
    return {
        type: SET_CHAT_ACTIVE_USER,
        payload: payload,
    };
}
export function fetchUser() {
    return dispatch => {
        console.log("chats");
        Axios.get("http://localhost:8000/api/user", {
            headers: {
                token: localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        })
            .then(user => {
                console.log(user);
                dispatch(fetchUserSuccess(user.data));
            })
            .catch(err => {
                console.log(err);
            });
    };
}
function fetchUserSuccess(payload) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: payload,
    };
}
