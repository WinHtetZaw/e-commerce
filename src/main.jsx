import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "aos/dist/aos.css"; // Import the AOS styles
import AOS from "aos";
import { NextUIProvider } from "@nextui-org/react";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Provider>
  // </React.StrictMode>,
);
