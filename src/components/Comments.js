import Parser from 'html-react-parser';

import { DetailComments } from '../style';

export const Comments = (props) => {
    return (
      <DetailComments>
        {props.data.children.map((item) => (
          <div>
            <DetailComments>
            {Parser(`${item.text}`)}
              {item.children?.length && <Comments data={item} />}
            </DetailComments>
          </div>
        ))}
      </DetailComments>
    );
  };