import { api } from "../../api";
import { actionTypes } from "../actionTypes";

export const GetUserData = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async(dispatch: any) => {
    try {
      dispatch({
        type: actionTypes.GET_USER_INFO_REQUEST
      })
      const data = await api.get("/get-user-info");
      dispatch({
        type: actionTypes.GET_USER_INFO_SUCCESS,
        payload: data
      })
    } catch (error) {
      console.error(error);
      dispatch({
        type: actionTypes.GET_USER_INFO_FAILURE
      })
    }
  }
};
