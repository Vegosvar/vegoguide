import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'components/Card';
import CardBody from 'components/CardBody';
import CardImage from 'components/CardImage';
import Image from 'components/Image';
import propTypes from './prop-types';

const PostCard = ({ cover, title, url }) => (
  <Link to={url}>
    <Card>
      <CardImage>
        <Image
          src={cover.thumbnail}
          alt={title}
          height="200px"
          width="100%"
        />
      </CardImage>
      <CardBody>{title}</CardBody>
    </Card>
  </Link>
);

PostCard.propTypes = propTypes;

export default PostCard;
