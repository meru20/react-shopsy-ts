import React, {createContext, useReducer, useState} from 'react';


const intialState = {
    
    products: [],
    cart: [],
    getProducts: () => {}
};

// create our global reducer
//reducer is a function that allows us to handle and update state
/*
-reducer will take an initial state
- will recieve an action declaration
- will look to update our state based on the desired action
- will return our updated state
*/
const appReducer = (state: any ,action: any) => {
    debugger;
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {...state, products: action.payload};
        default:
            return [...state];
    }

}


//create context from react
export const GlobalContext = createContext<InitialStateType>(intialState);

// create Global provider which wil feed state to our components
export const GlobalProvider: React.FC = ({children}) => {
    //useReducer is a react hook , to access and
    //update our state in our reducer function
    const [state , dispatch] = useReducer(appReducer,intialState) // take action and state
   
    
  

    const getProducts = async () => {
        try{
            let prods= await ( 
                await fetch ('https://fakestoreapi.com/products')).
                json();

                dispatch({type:'GET_PRODUCTS', payload:prods})
          
        }
        catch(e) {
            console.log(e);
        }
    }
    return (
        <GlobalContext.Provider value={{ cart:state.cart, products: state.products,  getProducts}}>
            {children} {/**<AppRouter/> */}

        </GlobalContext.Provider>
    )
}

