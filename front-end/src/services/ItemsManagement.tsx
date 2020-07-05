import axios from "axios";
import {
  getAllItemsEndpoint,
  orderItemsEndpoint,
  rateItemsEndpoint,
} from "../endpoints";

// methods for user purchasing & rating of items

// Get all items available in the shop
export async function retrieveAllItems() {

  const res = await axios.get(getAllItemsEndpoint, {
    headers: {
      // "x-access-token": token,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  return res.data;
}

// ------------

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
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    return res;
  } else {
    console.log("token not found");
  }
}

// Order items by a user
export async function rateItem(itemId: string, rating:number) {
  
    let token: string | null;
    if (localStorage.getItem("token") != null) {
      token = localStorage.getItem("token");
  
      const res = await axios.post(rateItemsEndpoint+`:${itemId}/rate/:${rating}`, {
        headers: {
          "x-access-token": token,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
  
      return res;
    } else {
      console.log("token not found");
    }
  }
  