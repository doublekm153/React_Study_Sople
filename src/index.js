import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import Library from "./chap_03/Library";
//import Clock from "./chap_04/Clock";
//import CommentList from "./chap_05/CommentList";
//import NotificationList from "./chap_06/NotificationList";
//import Accommodate from "./chap_07/Accommodate";
//import UserStatus from "./chap_07/UserStatus";
//const root = ReactDOM.createRoot(document.getElementById("root"));
//import ConfirmButton from "./chap_08/ConfirmButton";
//import LandingPage from "./chap_09/LandingPage";
//import AttendanceBook from "./chap_10/AttendanceBook";
import SignUp from "./chap_11/SignUp";

ReactDOM.render(
    <React.StrictMode>
        <SignUp />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
