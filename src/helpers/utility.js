import asyncComponent from "../helpers/AsyncFunc";
import React from "react";

export function removeStorage(key) {
  try {
    localStorage.removeItem(key);
    localStorage.removeItem(key + "_expiresIn");
  } catch (e) {
    /*eslint-disable no-console*/
    console.log(
      "removeStorage: Error removing key [" +
        key +
        "] from localStorage: " +
        JSON.stringify(e)
    );
    return false;
  }
  return true;
}

/*  getStorage: retrieves a key from localStorage previously set with setStorage().
    params:
        key <string> : localStorage key
    returns:
        <string> : value of localStorage key
        null : in case of expired key or failure
 */
export function getStorage(key) {
  let now = Date.now(); //epoch time, lets deal only with integer
  // set expiration for storage
  let expiresIn = localStorage.getItem(key + "_expiresIn");
  if (expiresIn === undefined || expiresIn === null) {
    return localStorage.getItem(key);
  }

  if (expiresIn < now) {
    // Expired
    removeStorage(key);
    return null;
  } else {
    try {
      let value = localStorage.getItem(key);
      return value;
    } catch (e) {
      console.log(
        "getStorage: Error reading key [" +
          key +
          "] from localStorage: " +
          JSON.stringify(e)
      );
      return null;
    }
  }
}

/*  setStorage: writes a key into localStorage setting a expire time
    params:
        key <string>     : localStorage key
        value <string>   : localStorage value
        expires <number> : number of seconds from now to expire the key
    returns:
        <boolean> : telling if operation succeeded
 */
export function setStorage(key, value, expires) {
  if (expires === undefined || expires === null) {
    localStorage.setItem(key, value);
    return;
  } else {
    expires = Math.abs(expires); //make sure it's positive
  }

  let now = Date.now(); //millisecs since epoch time, lets deal only with integer
  let schedule = now + expires * 1000;
  try {
    localStorage.setItem(key, value);
    localStorage.setItem(key + "_expiresIn", schedule);
  } catch (e) {
    console.log(
      "setStorage: Error setting key [" +
        key +
        "] in localStorage: " +
        JSON.stringify(e)
    );
    return false;
  }
  return true;
}

export function getPathComponent(path) {
  return asyncComponent(() => import(path));
}

export function URL_add_parameter(param, value) {
  let hash = {};
  let url = window.location.href;

  let parameters = url.split(/\?|&/);

  for (let i = 0; i < parameters.length; i++) {
    if (!parameters[i]) continue;

    let ary = parameters[i].split("=");
    hash[ary[0]] = ary[1];
  }

  hash[param] = value;

  let list = [];
  Object.keys(hash).forEach(function(key) {
    if (hash[key]) {
      list.push(key + "=" + hash[key]);
    }
  });

  url = window.location.pathname + "?" + list.join("&");
  return url;
}

export function reload_url(url) {
  window.location.href = url;
}

export function isEmpty(data) {
  return data == undefined || data == null || data == "";
}

/**
 * Add props to component
 * @param {*} beforeProps
 * @param {*} props
 * @param {*} component
 * @param {*} keyComponent
 */
export function addPropsComponent(
  beforeProps,
  props = {},
  component = null,
  keyComponent = null
) {
  if (component && keyComponent) {
    component = React.cloneElement(component, props);
    return {
      ...beforeProps,
      [keyComponent]: component
    };
  }
  return beforeProps;
}

/**
 * remove property in props
 * @param {*} props
 * @param {*} key
 */
export function removeProp(props, key = null) {
  if (key) {
    return {
      ...props,
      [key]: undefined
    };
  }
  return props;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatPagination(pagination) {
  return {
    pageSize: parseInt(pagination.per_page),
    current: pagination.current_page,
    total: pagination.total
  };
}

/**
 * convert data sort of ant table with server sort
 * @param {*} sorter sorter of ant table
 * @param {*} key key of object need sort in server
 */
export function formatSortTable(sorter, key) {
  if (key == sorter.field) {
    if (sorter.order == "ascend") return "asc";
    else {
      return "desc";
    }
  }
  return "";
}
