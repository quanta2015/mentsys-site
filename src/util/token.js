import decode from "jwt-decode";

const TOKEN_KEY = "MENT_SYS_TOKEN";
const USER_KEY = "MENT_SYS_USER";
const MENU_KEY = "MENT_SYS_MENU";

export const loadToken = () => {
  return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = (token) => {
  return window.localStorage.setItem(TOKEN_KEY, token);
};

export const removeUser = () => {
  window.localStorage.removeItem(USER_KEY);
};

export const loadUser = () => {
  try {
    return JSON.parse(window.localStorage.getItem(USER_KEY));
  } catch (error) {
    return null;
  }
};

export const saveUser = (data) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(data));
};

export const loadMenu = () => {
  return JSON.parse(window.localStorage.getItem(MENU_KEY));
};

export const saveMenu = (data) => {
  window.localStorage.setItem(MENU_KEY, JSON.stringify(data));
  console.log("saveMenu", JSON.stringify(data));
};

export default {
  loadUser,
  saveUser,
  removeUser,
  loadToken,
  saveToken,
  loadMenu,
  saveMenu,
};
