import React from 'react';
import { Gif } from './styles';

const GifComponent = ({ id, title, url }) => {
  return <Gif src={url} alt={title} />;
};

export default React.memo(GifComponent);
