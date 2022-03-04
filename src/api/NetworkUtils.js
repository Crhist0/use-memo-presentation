// imports
import axios from "axios";

/*============================================================*/

// creating axios instance
const createAxiosInstance = URL => {
  try {
    return axios.create({
      baseURL: URL,
      timeout: 30000
    });
  } catch (e) {
    console.log("Error Creating Axios Instance");
  }
};
/*============================================================*/

// creating config
const setUpConfig = async (isAuthenticated, multiPathConfig) => {
  try {
    const access_token = await localStorage.getItem("access_token");

    const CONFIG_WITH_AUTHORIZATION = {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": access_token
      }
    };
    const CONFIG_WITHOUT_AUTHORIZATION = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const MULTIPATH_CONFIG_WITH_AUTHORIZATION = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": access_token
      }
    };
    const MULTIPATH_CONFIG_WITHOUT_AUTHORIZATION = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    return isAuthenticated && !multiPathConfig
      ? CONFIG_WITH_AUTHORIZATION
      : !isAuthenticated && !multiPathConfig
      ? CONFIG_WITHOUT_AUTHORIZATION
      : isAuthenticated && multiPathConfig
      ? MULTIPATH_CONFIG_WITH_AUTHORIZATION
      : MULTIPATH_CONFIG_WITHOUT_AUTHORIZATION;
  } catch (e) {
    console.log("Error Setting Config");
  }
};

/*============================================================*/

//get method
const get = async (BASE_URL, API_URL, isAuthenticated) => {
  try {
    let CONFIG = await setUpConfig(isAuthenticated, false);
    let apiResponse = await createAxiosInstance(BASE_URL).get(API_URL, CONFIG);
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

//post method
const post = async (BASE_URL, API_URL, PAYLOAD = {}, isAuthenticated, multiPathConfig = false) => {
  const apiCancelToken = axios.CancelToken.source();
  try {
    let CONFIG = await setUpConfig(isAuthenticated, multiPathConfig);
    let apiResponse = await createAxiosInstance(BASE_URL).post(API_URL, PAYLOAD, {
      ...CONFIG,
      cancelToken: apiCancelToken.token
    });
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

//put method
const put = async (BASE_URL, API_URL, PAYLOAD = {}, isAuthenticated = true, multiPathConfig = false) => {
  const apiCancelToken = axios.CancelToken.source();
  try {
    let CONFIG = await setUpConfig(isAuthenticated, multiPathConfig);
    let apiResponse = await createAxiosInstance(BASE_URL).put(API_URL, PAYLOAD, {
      ...CONFIG,
      cancelToken: apiCancelToken.token
    });
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

//delete method
const del = async (BASE_URL, API_URL, isAuthenticated = true) => {
  try {
    let CONFIG = await setUpConfig(isAuthenticated, false);
    let apiResponse = await createAxiosInstance(BASE_URL).delete(API_URL, CONFIG);
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

export { put, post, get, del };
