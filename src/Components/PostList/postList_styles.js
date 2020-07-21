import styled from 'styled-components';

export const Container = styled.main`
    display: grid;
    justify-items: center;
    margin-top: 100px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 5px;
    padding: 0 20px;
    width: 100%;
    height: auto;
    min-height: 1240px;
    margin-bottom: 80px;

    @media (max-width: 1124px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        height: auto;
        min-height: 1400px;

        > * {
            margin: 10px;
        }
    }
`;

export const SearchInput = styled.input`
    margin: 0 auto;
`;
export const SearchInputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
