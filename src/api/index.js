import { put, post, get, del } from "./NetworkUtils";
import { BASE_URL } from "./config";

// get api - use the mode to create new api functions
export const getAPI = id => {
  const isAuthenticated = true;
  const URL = `/custom_url/${id}`;
  return get(BASE_URL, URL, isAuthenticated);
};

// post api - use the mode to create new api functions
export const postAPI = payload => {
  const isAuthenticated = false;
  const multiPathConfig = false;
  const URL = `/custom_url`;
  return post(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
};

// put api - use the mode to create new api functions
export const putAPI = (id, payload) => {
  const isAuthenticated = true;
  const multiPathConfig = false;
  const URL = `/custom_url/${id}`;
  return put(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
};

// delete api - use the mode to create new api functions
export const deleteAPI = id => {
  const isAuthenticated = false;
  const URL = `/custom_url/${id}`;
  return del(BASE_URL, URL, isAuthenticated);
};
