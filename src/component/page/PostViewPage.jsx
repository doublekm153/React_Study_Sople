import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const TitleText = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

const ContentText = styled.div`
    font-size: 16px;
    font-weight: normal;
`;

const CommentLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = data.find((item) => {
        return item.id === postId;
    });

    const [comment, setComment] = useState('');

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로가기"
                    onClick={() => {
                        navigate('/');
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={20}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;