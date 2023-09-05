import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment name={"김경민"} comment={"안녕하세요"} />
            <Comment name={"김경민2"} comment={"안녕하세요2"} />
        </div>
    );
}

export default CommentList;