import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../services/Store";
import ModalsProvider from "../ModalsProvider";
import { Toaster } from "react-hot-toast";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ModalsProvider>
        <Toaster position="top-center" reverseOrder={false} />
          {children}
        </ModalsProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
