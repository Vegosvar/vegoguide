import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'components';

const PostCard = ({ image, label, url }) => (
  <Link to={url}>
    <Card image={image}>
      <div>{label}</div>
    </Card>
  </Link>
);

export default PostCard;
