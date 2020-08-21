import axios from "axios";
import { orderItemsEndpoint, refreshTokenEndpoint } from "../endpoints";
import { store } from "../index";
import { IOrder } from "../types/Order";
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
    if (error.response.status === 401 && !originalRequest._retry) {
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

// ------------

// Order items by a user
export async function orderItems(order: IOrder) {
  let postBody = {
    subTotal: order.subTotal,
    discount: order.discount,
    delivery: order.delivery,
    otherCharges: order.otherCharges,
    otherChargesForPaymentMethod: order.otherChargesForPaymentMethod,
    totalAmount: order.totalAmount,
    cartDetails: order.cartDetails,
  };

  let reduxState: any = store.getState();
  let token = reduxState.user.token;
  if (token != null) {
    const res = await axios.post(orderItemsEndpoint, postBody, {});

    return res.data;
  } else {
    console.log("token not found");
  }
}
