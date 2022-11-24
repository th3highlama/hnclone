import { SearchResult } from '../style';

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
        {title}
    </a>
);

const Result = ({ post: { objectID, author, title, created_at_i, url } }) => {
    return (
    <SearchResult>
        <div className="post-title">
            <Link url={url} title={title} />
        </div>
        <div className="post-info">
            <span>
                by{' '}
                <Link url={`https://news.ycombinator.com/user?id=${author}`} title={author} />
            </span>
            <span>
                {new Date(created_at_i * 1000).toLocaleDateString('en-IN', {
                    hour: 'numeric',
                    minute: 'numeric'
                })}
            </span>|
        </div>
    </SearchResult>
    );
};

export default Result;