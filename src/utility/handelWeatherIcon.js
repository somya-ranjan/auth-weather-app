import {
  BsCloudSun,
  BsCloudHaze2,
  BsCloudRain,
  BsClouds,
} from "react-icons/bs";
import { WiDayCloudyHigh } from "react-icons/wi";

export const weatherIconHandler = (weatherType) => {
  let weatherIcon;
  switch (weatherType) {
    case "Clear":
      weatherIcon = BsCloudSun;
      break;
    case "Clouds":
      weatherIcon = WiDayCloudyHigh;
      break;
    case "Haze":
      weatherIcon = BsCloudHaze2;
      break;
    case "Rain":
      weatherIcon = BsCloudRain;
      break;

    default:
      weatherIcon = BsClouds;
  }
  return weatherIcon;
};
