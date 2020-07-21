import React, { useState, useRef } from 'react';
import { Container } from './createPost_styles';

export default function PostCreator({ fetchData, dispatch }) {
    const [newPostData, setNewPostData] = useState({});
    const post = useRef();
    const title = useRef();

    const handleNewPostContent = (e) => {
        const { id, value } = e.target;
        setNewPostData({ ...newPostData, [id]: value });
    };

    const sendPost = async (e) => {
        e.preventDefault();
        await dispatch({ type: 'CREATE_POST', payload: newPostData });
        await fetchData();
        post.current.value = '';
        title.current.value = '';
    };

    return (
        <Container onSubmit={sendPost}>
            <label htmlFor="">Título</label>
            <input
                ref={title}
                onChange={handleNewPostContent}
                placeholder="Titulo do post"
                type="text"
                id="title"
                required
            />
            <label htmlFor="">Post</label>
            <input
                ref={post}
                onChange={handleNewPostContent}
                placeholder="Seu post"
                type="text"
                id="text"
                required
            />
            <button type="submit">Enviar</button>
        </Container>
    );
}
