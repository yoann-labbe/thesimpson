import React from 'react';
import './QuoteCard.css';

const card = ({simpson}) => (
  <figure className="QuoteCard">
    <img src={simpson.image} alt={simpson.character} />
    <figcaption>
      <blockquote>{simpson.quote}</blockquote>
      <cite>{simpson.character}</cite>
    </figcaption>
  </figure>
);

export default card;