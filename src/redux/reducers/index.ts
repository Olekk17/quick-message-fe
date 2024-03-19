import { saveLoaderDecrease } from "../../helper";
import { User } from "../../types";
import { ActionTypes, actionTypes } from "../actionTypes";

type State = {
  loader: number;
  userInfo: User | null;
}

const initialState: State = {
  loader: 0,
  userInfo: null,
}

export default function appReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case actionTypes.GET_USER_INFO_REQUEST:
      return {
        ...state,
        loader: state.loader + 1,
      };

    case actionTypes.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loader: saveLoaderDecrease(state.loader),
        userInfo: action.payload,
      };
    default:
      return state;
  }
}