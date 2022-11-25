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

export const SearchResultWrapper = styled.div`
    width: 60%;
`;

export const SearchResult = styled.div`
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
`;

export const PostTitle = styled.div`
    font-size: 1.2rem;
    margin-bottom: 5px;
`;

export const PostInfo = styled.div`
    font-size: 0.8rem;
`;

export const PostDetails = styled.span`
    margin-right: 4px;
`;

export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DetailTitle = styled.div`
    padding-left: 50px;
    font-weight: bold;
    font-size: 1.2rem;
`;

export const DetailPoints = styled.div`
    padding-left: 50px;
    font-weight: bold;
    font-size: 1.2rem;
`;

export const DetailComments = styled.div`
    margin-left: 50px;
`;