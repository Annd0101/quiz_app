import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";
import { useEffect } from "react";
export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};
export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};
export const saveTimer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.updateTimer(result));
  } catch (error) {
    console.log(error);
  }
};
/** insert user data */
export const usePublishResult = (resultData) => {
  // Logic to publish result, possibly updating Redux state
  const { result, username, minutes, seconds } = resultData;
  (async () => {
    try {
      if (result.length !== 0 && !username && !minutes && !seconds)
        throw new Error("Couldn't get Result");
      await postServerData(
        "http://localhost:5000/api/result",
        resultData,
        (data) => data
      );
      return true;
    } catch (error) {
      console.log(error);
    }
  })();
};
