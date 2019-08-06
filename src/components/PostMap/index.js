import React, { useEffect } from 'react';
import PostMapMarker from 'components/PostMapMarker';
import { Map, TileLayer } from 'react-leaflet';
import config from 'config';
import propTypes from './prop-types'
import 'leaflet/dist/leaflet.css';

const center = [62.3875, 16.3255556]; // Geographical center of Sweden

const PostMap = ({ items = [], zoom = 15 }) => {
  const leafletMap = React.createRef();
  const url = `https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${config.mapbox.accessToken}`

  const getBounds = () => {
    return items.reduce((bounds, item) => {
      const [longitude, latitude] = item.address.location.coordinates;
      if (longitude && latitude) {
        return [...bounds, [latitude, longitude]];
      }

      return bounds;
    }, []);
  }

  const fitBoundsToMarkers = () => {
    if (leafletMap.current) {
      const bounds = getBounds();

      leafletMap.current.leafletElement.fitBounds(bounds, {
        maxZoom: zoom
      });
    }
  }

  useEffect(() => {
    if (items.length > 0) {
      fitBoundsToMarkers()
    }
  })

  return (
    <div
      style={{
        height: '400px'
      }}
    >
      <Map
        ref={leafletMap}
        center={center}
        style={{
          height: '400px'
        }}
      >
        <TileLayer attribution="" url={url} />
        {items.map(item => (
          <PostMapMarker key={item._id} {...item} />
        ))}
      </Map>
    </div>
  );
}

PostMap.propTypes = propTypes;

export default PostMap;
