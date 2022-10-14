import { combineReducers } from "redux";
import { authUserReducer } from "./reducer/Auth.reducer";
import { ProfileReducer } from "./reducer/ProfileReducer";

export const rootReducer = combineReducers({
    auth : authUserReducer,
    Profile:ProfileReducer
})