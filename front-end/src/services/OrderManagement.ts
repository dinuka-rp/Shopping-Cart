import axios from "axios";
import { orderItemsEndpoint } from "../endpoints";
import { store } from "../index";
import { IOrder } from "../types/Order";

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
