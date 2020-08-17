import axios from "axios";
import { productsEndpoint } from "../endpoints";
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
    config.headers.Authorization = `bearer ${token}`;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

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
