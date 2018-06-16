import { capitalizeFirstLetter } from "./utility";
import moment from "moment";

export function formatTime(time, format = "LLLL") {
  return capitalizeFirstLetter(moment.unix(time).format(format));
}
