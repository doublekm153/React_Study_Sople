import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import Library from "./chap03/Library";
//import Clock from "./chap_04/Clock";
//import CommentList from "./chap_05/CommentList";
import NotificationList from "./chap_06/NotificationList";

//const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
        <NotificationList />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
