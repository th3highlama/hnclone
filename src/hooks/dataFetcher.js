import { useState, useEffect } from 'react';
import { getSearchResults } from '../utils/network';

const useDataFetcher = (query) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getSearchResults(query)
        .then((result) => {
            setPosts(result.data.hits);
            setIsLoading(false);
        })
        .catch(() => {
            setIsLoading(false);
        });
    }, [query]);
    return { isLoading, posts };
};

export default useDataFetcher;