import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./reset.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { PostProvider } from "./context/PostsContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <PostProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </PostProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
