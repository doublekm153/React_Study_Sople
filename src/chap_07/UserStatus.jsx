import React, {useState, useEffect} from "react";

function UserStatus(props) {
    const [inOnline, setInOnline] = useState(null);

    function handleStatusChange(status) {
        setInOnline(status.isOnline);
    }

    useEffect(() => {
        // eslint-disable-next-line no-undef
        ServerAPI.subcribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            // eslint-disable-next-line no-undef
            ServerAPI.unsubcribeUserStatus(props.user.id, handleStatusChange);
        };
    })

    if (inOnline === null) {
        return "로딩중...";
    }
    return inOnline ? "온라인" : "오프라인";
}

export default UserStatus;