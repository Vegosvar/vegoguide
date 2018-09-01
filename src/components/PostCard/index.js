import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'components';

const PostCard = ({ cover, label, url }) => (
  <Link to={url}>
    <Image src={cover.thumbnail} alt={label} height="200px" width="100%" />
    <Card>
      <div>{label}</div>
    </Card>
  </Link>
);

export default PostCard;
