export const shopBackend = process.env.REACT_APP_API_ENDPOINT;


// get endpoints
export const getAllItemsEndpoint = `${shopBackend}products`;        // get all shop items from backend


// post endpoints
export const loginUserEndpoint = `${shopBackend}login`;          // login user
export const registerUserEndpoint = `${shopBackend}register`;          // Register new user

export const orderItemsEndpoint = `${shopBackend}orders`;          // order items by a user
export const rateItemsEndpoint = `${shopBackend}products/`;          // rate an item by a user
// products/:id/rate/:rate


// patch endpoints
// altering of user rating can be done here

// delete endpoints
// no delete endpoints needed?