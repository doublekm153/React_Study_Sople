import React from "react";

function Comment(props) {
    return (
        <div>
            <h1>내 이름은 {props.name}</h1>
            <h2>내 인사말은 {props.comment}</h2>
        </div>
    );
}

export default Comment;