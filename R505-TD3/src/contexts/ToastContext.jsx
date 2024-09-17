// ToastContext.js
import { createContext, useReducer} from "react";
import { toastReducer } from "../reducers/toastReducer";
import ToastsContainer from "../components/ToastsContainer";

export const ToastContext = createContext();

// ToastContext.js
const initialState = {
    toasts: [],
  };
  
  export const ToastContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toastReducer, initialState);
  
    return (
        <ToastContext.Provider>
          <ToastsContainer toasts={state.toasts} />
          {children}
        </ToastContext.Provider>
      );
    };

// ToastContext.js
const addToast = (message) => {
    const id = Math.floor(Math.random() * 10000000);
    dispatch({ type: "ADD_TOAST", payload: { id, message } });
  };
  

  // ToastContext.js  
const remove = (id) => {
    dispatch({ type: "DELETE_TOAST", payload: id });
  };

const success = (message) => {
    addToast(message);
};
  