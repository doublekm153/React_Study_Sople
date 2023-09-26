import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";

import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitletext = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    margin: 0;
    padding: 0;
`;

function App(props) {
    return (
        <BrowserRouter>
            <MainTitletext>React Blog</MainTitletext>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postid" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
