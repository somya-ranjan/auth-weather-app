import { all, takeLatest } from "redux-saga/effects";
import { getCurrencyExchangeData, getWeatherData } from "../sagaActions";
import { getWeatherSaga } from "./weather";
import { getCurrencyExchangeSaga } from "./currency";

function* weatherWatcher() {
  yield takeLatest(getWeatherData.type, getWeatherSaga);
}

function* currencyWatcher() {
  yield takeLatest(getCurrencyExchangeData.type, getCurrencyExchangeSaga);
}

export default function* rootSaga() {
  yield all([weatherWatcher(), currencyWatcher()]);
}
