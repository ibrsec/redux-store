import {legacy_createStore as createStore,combineReducers } from "redux";
import { catReducer } from "./catReducer";
import { productReducer } from "./productReducer";
import { composeWithDevTools } from '@redux-devtools/extension';


const rootReducer = combineReducers({
    cat:catReducer,
    product:productReducer
})
export const store = createStore(rootReducer,composeWithDevTools());