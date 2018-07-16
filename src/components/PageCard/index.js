import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'components';

const PageCard = ({ image, label, url }) => (
  <Link to={url}>
    <Card image={image}>{label}</Card>
  </Link>
);

export default PageCard;
