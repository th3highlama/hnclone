import { useLocation } from "react-router-dom";
import { useDetailsFetcher } from '../hooks/dataFetcher';
import { Comments } from './Comments';
import { DetailWrapper, DetailTitle, DetailPoints } from '../style';

const Details = () => {

    const search = useLocation().search;
    const objectId = new URLSearchParams(search).get('objectId');
    const { isLoading, details } = useDetailsFetcher(objectId);

    return (
        <>
        {isLoading ? (
        <p className="loading">Loading...</p>
        ) : (
            <DetailWrapper>
                <DetailTitle>{details.title}</DetailTitle>
                <DetailPoints>{details.points}</DetailPoints>
                <Comments data={details} />
            </DetailWrapper>
        )}
    </>);
};

export default Details;