import { createStore, applyMiddleware } from "redux";
import rootreducer from "./root-reducer";

import { logger } from "redux-logger";

const middlewares = [logger];

const store = createStore(rootreducer, applyMiddleware(...middlewares));

export default store;
