import axios from "axios";
import { productsEndpoint, refreshTokenEndpoint } from "../endpoints";
import { store } from "../index";
import { renewToken } from "../store/actions/UserActions";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    config.headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    let reduxState: any = store.getState();
    let token = reduxState.user.token;
    config.headers.Authorization = `bearer ${token}`;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    let reduxState: any = store.getState();
    let token = reduxState.user.token;
    let refreshToken = reduxState.user.refreshToken;

    const originalRequest = error.config;
    if (
      error.response && // avoid connection refused error
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(refreshTokenEndpoint, {
          refreshToken: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            // 1) put token to redux state
            store.dispatch(
              renewToken(res.data.access_token, res.data.refresh_token)
            );

            // 2) Change Authorization header
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;

            // 3) return originalRequest object with Axios.
            return axios(originalRequest);
          }
        });
    }
    // return Error object with Promise
    return Promise.reject(error);
  }
);
// reference: https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da

// ---------------
// methods for user purchasing & rating of products

// Get all items available in the shop - with pagination
export async function retrieveProducts(page: number) {
  const res = await axios.get(productsEndpoint + `?page=${page}`, {});

  return res.data;
}

// ------------

// Rate products by a user
export async function rateProduct(id: string, rating: number) {
  let reduxState: any = store.getState();
  let token = reduxState.user.token;
  if (token !== null) {
    const res = await axios
      .post(productsEndpoint + `/${id}/rate/${rating}`, {})
      .then((response: any) => {
        console.log(response);
      });

    return res;
  } else {
    console.log("token not found");
  }
}

// Get existing rating of a product by a user
export async function getUserProductRating(id: string) {
  let reduxState: any = store.getState();
  let token = reduxState.user.token;
  if (token !== null) {
    const res = await axios
      .get(productsEndpoint + `/${id}/rate`, {})
      .then((response: any) => {
        // console.log(response);
        return response;
      });
    return res;
  } else {
    console.log("token not found");
  }
}

// Patch request to alter rating ---------->>>>>
export async function alterRateProduct(id: string, rating: number) {
  let reduxState: any = store.getState();
  let token = reduxState.user.token;
  if (token !== null) {
    const res = await axios
      .patch(productsEndpoint + `/${id}/rate/${rating}`, {})
      .then((response: any) => {
        // console.log(response);
      });

    return res;
  } else {
    console.log("token not found");
  }
}
