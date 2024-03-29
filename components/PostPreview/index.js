import {Author, Image, PostPreviewDiv, Title} from './styles';
import React from 'react';

const PostPreview = React.forwardRef((props, ref) => (
  <PostPreviewDiv href={props.href} ref={ref}>
    <Image src={`http://localhost:3030/${props.image}`} alt="my image"/>
    <Title>{props.title}</Title>
    <Author>
      <div>
        Gabriel Debona
      </div>
      <div>
        {props.date}
      </div>
    </Author>
  </PostPreviewDiv>
));

export default PostPreview;