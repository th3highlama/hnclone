import { useState, useEffect } from 'react';
import { getSearchResults, getDetails } from '../utils/network';

export const usePostsFetcher = (query) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSearchResults(query)
      .then((posts) => {
        setPosts(posts.data.hits);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [query]);

  return { isLoading, posts };
};

export const useDetailsFetcher = (query) => {
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        setIsLoading(true);
        getDetails(query)
        .then((details) => {
            setDetails(details.data);
            setIsLoading(false);
        })
        .catch(() => {
            setIsLoading(false);
        });
    }, [query]);
  
    return { isLoading, details };
  };