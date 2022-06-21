export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
    //end goal for update products: store the data retrieved for products by Apollo in this global state; this way, we can add offline capabilities later and persist product data
export const UPDATE_CATEGORIES = "UPDATE CATEGORIES";
    //here, we want to take the list of categories retrieved from the server by Apollo and store it in the global state; again, this allows us to easily add offline capabilities at a future point in the project.
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
    //the connecting piece of data for the previous two actions created. we want to be able to select a category from the state created by the update_categories action and display products for that category from the list we create from the update_products action.