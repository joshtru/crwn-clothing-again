import { createStore, applyMiddleware } from "redux";
import rootreducer from "./root-reducer";

import { logger } from "redux-logger";

const middleWare = [logger];

const store = createStore(rootreducer, applyMiddleware(middleWare));

export default store;
