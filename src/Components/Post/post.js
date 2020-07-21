import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import PostDetail from './PostDetail/PostDetail';
import labEdiit from '../../Services/labEdiit';
import LikeCommentContext from '../../Contexts/LikeCommentContext';
import DisLikeCommentContext from '../../Contexts/DisLikeCommentContext';

export default function Post() {
    const params = useParams();
    const [post, setPost] = useState(undefined);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getPost();
    }, []);

    const auth = {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    };

    const getPost = () => {
        labEdiit
            .get(`posts/${params.id}`, auth)
            .then((response) => {
                setPost(response.data.post);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const likePost = () => {
        let data;
        post.userVoteDirection === 1
            ? (data = { direction: 0 })
            : (data = { direction: 1 });

        labEdiit.put(`posts/${params.id}/vote`, data, auth).then((response) => {
            getPost();
        });
    };

    const dislikePost = () => {
        let data;
        post.userVoteDirection === -1
            ? (data = { direction: 0 })
            : (data = { direction: -1 });

        labEdiit.put(`posts/${params.id}/vote`, data, auth).then((response) => {
            getPost();
        });
    };

    const likeComment = (comment) => {
        let data;
        comment.userVoteDirection === 1
            ? (data = { direction: 0 })
            : (data = { direction: 1 });
        labEdiit
            .put(`posts/${params.id}/comment/${comment.id}/vote`, data, auth)
            .then((response) => {
                getPost();
            });
    };

    const dislikeComment = (comment) => {
        let data;
        comment.userVoteDirection === -1
            ? (data = { direction: 0 })
            : (data = { direction: -1 });

        labEdiit
            .put(`posts/${params.id}/comment/${comment.id}/vote`, data, auth)
            .then((response) => {
                getPost();
            });
    };

    const onChangeComment = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    const submitComment = () => {
        console.log(inputValue);
        const data = {
            text: inputValue,
        };

        labEdiit
            .post(`posts/${params.id}/comment`, data, auth)
            .then((response) => {
                console.log(response);
                setInputValue('');
                getPost();
            });
    };

    return (
        <LikeCommentContext.Provider value={likeComment}>
          <DisLikeCommentContext.Provider value={dislikeComment}>
            {post !== undefined && (
                    <PostDetail
                        key={post.id}
                        post={post}
                        like={likePost}
                        dislike={dislikePost}
                        changeInputValue={onChangeComment}
                        submitComment={submitComment}
                        inputValue={inputValue}
                        dislikeComment={dislikeComment}
                    />
            )}
          </DisLikeCommentContext.Provider>
        </LikeCommentContext.Provider>
    );
}
