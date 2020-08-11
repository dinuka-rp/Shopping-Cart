import axios from "axios";
import {
  getProductsEndpoint,
  orderItemsEndpoint,
  rateProductEndpoint,
} from "../endpoints";
import { store } from "../index";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // is this ok   >>>??
    config.headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    let reduxState: any = store.getState();
    let token = reduxState.user.token;
    config.headers.token = { token };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// ---------------
// methods for user purchasing & rating of products

// Get all items available in the shop
export async function retrieveProducts() {
  const res = await axios.get(getProductsEndpoint, {});

  return res.data;
}

// ------------

// Rate products by a user
export async function rateProduct(itemId: string, rating: number) {
  let reduxState: any = store.getState();
  let token = reduxState.user.token;
  if (token != null) {
    const res = await axios.post(
      rateProductEndpoint + `:${itemId}/rate/:${rating}`,
      {}
    );

    return res;
  } else {
    console.log("token not found");
  }
}

// Order items by a user
export async function orderItems(title: string) {
  let postBody = {
    title: title,
    // more details ned to be entered here ------------->>>>>
  };

  let reduxState: any = store.getState();
  let token = reduxState.user.token;
  if (token != null) {
    const res = await axios.post(orderItemsEndpoint, postBody, {});

    return res;
  } else {
    console.log("token not found");
  }
}
