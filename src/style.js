import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderWrapper = styled.div`
    color: #ff6600;
    font-weight: bold;
    padding-top: 50px;
    padding-bottom: 20px;
    font-size: 2rem;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchBar = styled.input`
    border: 2px solid #ff6600;
    width: 50vw;
    padding: 5px 12px;
    border-radius: 5px;
    font-size: 1rem;
`;