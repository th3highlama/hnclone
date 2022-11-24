import React from 'react';
import Result from './Result';
import useDataFetcher from '../hooks/dataFetcher';
import { useLocation } from "react-router-dom";
import { SearchResultWrapper } from '../style';

const SearchResults = (props) => {
    const search = useLocation().search;
    const query = new URLSearchParams(search).get('query');
    const { isLoading, posts } = useDataFetcher(query);
    
    return (
    <React.Fragment>
        {isLoading ? (
        <p className="loading">Loading...</p>
        ) : (
        <SearchResultWrapper>
            {posts.map((data) => (
            <Result key={data.objectID} post={data} />
            ))}
        </SearchResultWrapper>
        )}
    </React.Fragment>
  );
};

export default SearchResults;