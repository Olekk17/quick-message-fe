import { Action } from "redux";
import { User } from "../../types";

export enum actionTypes {
  GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST",
  GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS",
  GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE",
}

export interface GetUserInfoRequestAction extends Action {
  type: actionTypes.GET_USER_INFO_REQUEST;
}

export interface GetUserInfoSuccessAction extends Action {
  type: actionTypes.GET_USER_INFO_SUCCESS;
  payload: User;
}

export interface GetUserInfoFailureAction extends Action {
  type: actionTypes.GET_USER_INFO_FAILURE;
}

export type ActionTypes =
  | GetUserInfoRequestAction
  | GetUserInfoSuccessAction
  | GetUserInfoFailureAction;

