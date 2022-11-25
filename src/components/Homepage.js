
import { SearchWrapper, SearchBar } from '../style';

const HomePage = () => {
  return <SearchWrapper>
          <SearchBar placeholder='Enter search term' autoFocus onKeyPress={(e) => {
            if (e.key === "Enter") {
              window.location=`/search?query=${e.target.value}`
            }
          }}/>
        </SearchWrapper>;
};

export default HomePage;