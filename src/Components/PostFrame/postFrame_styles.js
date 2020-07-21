import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 350px;
    height: 350px;
    flex-direction: column;
    align-items: center;
    border: 4px dashed #71aabb;
    margin: 10px;
    border-radius: 3px;
    padding: 10px;

    a {
        text-decoration: none;
        color: inherit;
    }

    div {
        margin-top: 30px;
        width: 100%;
        height: 30%;
    }

    svg {
        cursor: pointer;
        margin: 0 10px;
    }
`;

export const Text = styled.p`
    padding: 10px;
    word-break: break-word;
    text-align: center;
    width: 100%;
    height: 80px;
    overflow-y: scroll;
`;

export const Footer = styled.span`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
