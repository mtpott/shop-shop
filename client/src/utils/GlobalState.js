import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;
//every Context obj comes with two components: Provider and Consumer
    //Provider: special type of React component that we wrap our app in so it can make the state data that's pased into it as a prop available to all other compnents
    //Consumer: our means of grabbing and using the data that the Provider holds for us

const StoreProvider = ({ value = [], ...props }) => {
    //instantiate the initial global state with useProductReducer()
        //it wraps around the useReducer() hook from react, so we receive the following items in return: state-->the most up-to-date version of our global state obj; dispatch-->the method we execute to update our state. it will specifically look for an action obj passed in as its argument
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    //use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />
}

//StoreProvider function isn't as much of a function as it is our own custom <Provider> component, which is why parameters are defined at the top. the function is set up to accept props if needed, which it does.
    //if we didn't include {...props} in the returning <Provider>, nothing on the page would be rendered.

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };