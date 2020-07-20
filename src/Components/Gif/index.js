import React from 'react';
import { Gif, Img, Title } from './styles';

const GifComponent = ({ id, title, url }) => {
  if (url === undefined) {
    url =
      'https://e-fisiomedic.com/wp-content/uploads/2013/11/default-placeholder-300x300.png';
  }

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
