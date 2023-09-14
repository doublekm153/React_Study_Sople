import React from "react";

const tyles = {
    wrapper: {
        padding : 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid gray",
    },
    greeting: {
        marginLeft: 8,
    },
};

function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={tyles.wrapper}>
            {isLoggedIn && <span style={StyleSheet.greeting}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;