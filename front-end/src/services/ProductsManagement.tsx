import axios from "axios";
import {
  getProductsEndpoint,
  orderItemsEndpoint,
  rateProductEndpoint,
} from "../endpoints";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // is this ok   >>>??
    config.headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// methods for user purchasing & rating of products

// Get all items available in the shop
export async function retrieveProducts() {
  const res = await axios.get(getProductsEndpoint, {
    // headers: {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    // },
  });

  return res.data;
}

// ------------

// Rate products by a user
export async function rateProduct(itemId: string, rating: number) {
  let token: string | null;
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");

    const res = await axios.post(
      rateProductEndpoint + `:${itemId}/rate/:${rating}`,
      {
        headers: {
          "x-access-token": token,
          // "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
        },
      }
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

  let token: string | null;
  if (localStorage.getItem("token") != null) {
    token = localStorage.getItem("token");

    const res = await axios.post(orderItemsEndpoint, postBody, {
      headers: {
        "x-access-token": token,
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    });

    return res;
  } else {
    console.log("token not found");
  }
}
