import Parser from 'html-react-parser';

import { DetailComments } from '../style';

export const Comments = (props) => {
    return (
      <DetailComments>
        {props.data.children.map((item) => (
          <div key={item.id}>
            <DetailComments>
            {Parser(`${item.text}`)} - <>{item.author}</>
              {item.children?.length && <Comments data={item} />}
            </DetailComments>
          </div>
        ))}
      </DetailComments>
    );
  };