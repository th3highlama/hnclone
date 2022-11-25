import { SearchResult, PostTitle, PostInfo, PostDetails } from '../style';

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
        {title}
    </a>
);

const Result = ({ post: { objectID, points, author, title, created_at_i, url, num_comments } }) => {
    return (
    <SearchResult>
        <PostTitle>
            <Link url={`/details?objectId=${objectID}`} title={title} />
        </PostTitle>
        <PostInfo>
            <PostDetails>{points} Points |</PostDetails>
            <PostDetails>
                by{' '}
                <Link url={`https://news.ycombinator.com/user?id=${author}`} title={author} /> |
            </PostDetails>
            <PostDetails>
                {new Date(created_at_i * 1000).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                })} |
            </PostDetails>
            <PostDetails>{num_comments} comments |</PostDetails>
        </PostInfo>
    </SearchResult>
    );
};

export default Result;