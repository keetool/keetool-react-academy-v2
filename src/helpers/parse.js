import i18n from "../languages/i18n";
import { capitalizeFirstLetter } from "./utility";

function parseUser(data, userID) {
  if (data.id == userID) {
    return {
      ...data,
      message: i18n.t("manage.global.you")
    };
  } else {
    return {
      ...data,
      message: data.name,
      url: `/profile/${data.id}`
    };
  }
}

function parseKey(key) {
  return {
    message: i18n.t(key)
  };
}

function parseMerchant(data) {
  return {
    ...data,
    message: data.name,
    url: "/"
  };
}

function parse(data, userID) {
  switch (data.type) {
    case "user":
      return parseUser(data.data, userID);
    case "key":
      return parseKey(data.data);
    case "merchant":
      return parseMerchant(data.data);
    default:
      return data.data;
  }
}

function convert(data) {
  let result = "";
  data.forEach(item => {
    if (item.url) {
      result += `<a href="${item.url}">${item.message}</a>&nbsp;`;
      return;
    }
    if (item.message) {
      result += item.message + "&nbsp;";
      return;
    }
  });
  return capitalizeFirstLetter(result);
}

export function parseLog(logs, userID) {
  logs = logs.map(item => {
    return parse(item, userID);
  });

  return convert(logs);
}
