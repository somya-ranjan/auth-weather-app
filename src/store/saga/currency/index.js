import { put } from "redux-saga/effects";
import {
  getCurrencyDataExchangeStart,
  getCurrencyDataExchangeSuccess,
  getCurrencyDataExchangeFailed,
} from "../../sagaActions";
import errorHandler from "../../../utility/errorHandler";
import toaster from "../../../utility/toaster";
import {
  VITE_APP_CURRENCY_URL,
  VITE_APP_CURRENCY_KEY,
} from "../../../utility/envConfig";

export function* getCurrencyExchangeSaga({ payload }) {
  const { currencyName } = payload;
  yield put(getCurrencyDataExchangeStart());
  yield errorHandler({
    endpoint: `fluctuation?start_date=2020-05-14&end_date=2023-06-12&base=${currencyName}`,
    successHandler: yield function* (response) {
      yield put(getCurrencyDataExchangeSuccess(response));
    },
    failHandler: yield function* (response) {
      yield put(getCurrencyDataExchangeFailed());
      toaster.error(response);
    },
    baseUrl: VITE_APP_CURRENCY_URL,
    apiKey: VITE_APP_CURRENCY_KEY,
    failHandlerType: "CUSTOM",
    apiType: "get",
  });
}
