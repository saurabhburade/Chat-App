const INITIAL_STATE = {
    activeChat:{},
    chatList:[]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case action.type:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};