import React from 'react';
import { Gif, Img, Title } from './styles';

const GifComponent = ({ id, title, url }) => {
  console.log(url);
  return (
    <Gif>
      <Img height='200px' loading='lazy' src={url} alt={title} />
      {title && (
        <Title>
          <small>{title}</small>
        </Title>
      )}
    </Gif>
  );
};

export default React.memo(GifComponent);
