import chatReducer from "./Chat/chat.reducer"
import logger from "redux-logger";
import thunk from "redux-thunk";
const { createStore, applyMiddleware } = require("redux");

 export const store = createStore(chatReducer,applyMiddleware(logger,thunk));