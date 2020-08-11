import axios from "axios";
import { productsEndpoint, orderItemsEndpoint } from "../endpoints";
import { store } from "../index";

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
  const res = await axios.get(productsEndpoint, {});

  return res.data;
}

// ------------

// Rate products by a user
export async function rateProduct(itemId: string, rating: number) {
  let reduxState: any = store.getState();
  let token = reduxState.user.token;
  if (token != null) {
    const res = await axios.post(
      productsEndpoint + `:${itemId}/rate/:${rating}`,
      {}
    );

    return res;
  } else {
    console.log("token not found");
  }
}

// Patch request to alter rating ---------->>>>>

// Order items by a user
export async function orderItems(
  discount: number,
  delivery: number,
  totalPrice: number,
  cartDetails: JSON // (ICartItem - (image + rating))
) {
  let postBody = {
    discount: discount,
    delivery: delivery,
    totalPrice: totalPrice,
    cartDetails: cartDetails,
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
