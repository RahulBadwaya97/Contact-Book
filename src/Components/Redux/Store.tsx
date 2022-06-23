import {  createStore ,combineReducers } from "redux";
import { DeleteReducer } from "./Reducer/DeleteReducer";
import { CreateReducer } from "./Reducer/CreateReducer";
import {UpdateReducer} from './Reducer/UpdateReducer'

const Store = createStore(combineReducers({
    create : CreateReducer,
    delete : DeleteReducer,
    update : UpdateReducer
}))

export default Store