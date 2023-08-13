import { put } from "redux-saga/effects";
import {
  getWeatherDataStart,
  getWeatherDataSuccess,
  getWeatherDataFailed,
} from "../../sagaActions";
import errorHandler from "../../../utility/errorHandler";
import toaster from "../../../utility/toaster";
import {
  VITE_APP_WEATHER_KEY,
  VITE_APP_WEATHER_URL,
} from "../../../utility/envConfig";

export function* getWeatherSaga({ payload }) {
  const { city } = payload;
  yield put(getWeatherDataStart());
  yield errorHandler({
    endpoint: `forecast?q=${city}&units=metric&APPID=${VITE_APP_WEATHER_KEY}`,
    successHandler: yield function* (response) {
      yield put(getWeatherDataSuccess(response));
    },
    failHandler: yield function* (response) {
      yield put(getWeatherDataFailed());
      toaster.error(response);
    },
    apiKey: "",
    baseUrl: VITE_APP_WEATHER_URL,
    failHandlerType: "CUSTOM",
    apiType: "get",
  });
}
