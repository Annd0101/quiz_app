import { postServerData, getServerData } from "../helper/helper";
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
  useEffect(() => {
    const fetchDataAndPostIfNecessary = async () => {
      const { result, username, minutes, seconds } = resultData;

      // Fetch existing results
      let data;
      try {
        data = await getServerData(
          "https://quiz-app-backend-l1fn5n0y4-annd0101s-projects.vercel.app/api/result"
        );
      } catch (error) {
        console.error("Error fetching server data:", error);
        return;
      }

      // Check if username exists
      const usernameExists = data.some(
        (dataItem) => dataItem.username === username
      );

      if (usernameExists) {
        console.log("Username exists. Not calling postServerData.");
        return;
      }

      // Proceed to post data if the username doesn't exist
      try {
        await postServerData(
          "https://quiz-app-backend-l1fn5n0y4-annd0101s-projects.vercel.app/api/result",
          resultData
        );
        console.log("Data posted successfully.");
      } catch (error) {
        console.error("Error posting server data:", error);
      }
    };

    fetchDataAndPostIfNecessary();
  }, [resultData]); // Depend on resultData, assuming this doesn't change frequently outside conditions
};
