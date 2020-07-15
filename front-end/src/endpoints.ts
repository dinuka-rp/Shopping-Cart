export const shopBackend = process.env.REACT_APP_API_ENDPOINT;


// get endpoints
export const getProductsEndpoint = `${shopBackend}products`;        // get all shop products from backend


// post endpoints
export const loginUserEndpoint = `${shopBackend}login`;          // login user
export const registerUserEndpoint = `${shopBackend}register`;          // Register new user

export const orderItemsEndpoint = `${shopBackend}orders`;          // order items by a user
export const rateProductEndpoint = `${shopBackend}products/`;          // rate a product by a user


// patch endpoints
// altering of user rating can be done here

// delete endpoints
// no delete endpoints needed?