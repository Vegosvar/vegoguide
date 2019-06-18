import React from 'react';
import PostMapMarker from 'components/PostMapMarker';
import { Map, TileLayer } from 'react-leaflet';
import config from 'config';
import 'leaflet/dist/leaflet.css';

const center = [62.3875, 16.3255556]; // Geographical center of Sweden

class PostMap extends React.Component {
  constructor(props) {
    super(props);

    this.leafletMap = React.createRef();

    this.state = {
      url: `https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${
        config.mapbox.accessToken
      }`
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fitBoundsToMarkers();
    }, 100);
  }

  componentDidUpdate() {
    this.fitBoundsToMarkers();
  }

  getBounds() {
    return this.props.items.reduce((bounds, item) => {
      const [longitude, latitude] = item.address.location.coordinates;
      if (longitude && latitude) {
        return [...bounds, [latitude, longitude]];
      }

      return bounds;
    }, []);
  }

  fitBoundsToMarkers() {
    if (this.leafletMap.current) {
      const bounds = this.getBounds();
      this.leafletMap.current.leafletElement.fitBounds(bounds, {
        maxZoom: this.state.zoom || this.state.maxZoom || 15
      });
    }
  }

  render() {
    return (
      <div
        style={{
          height: '400px'
        }}
      >
        <Map
          ref={this.leafletMap}
          center={center}
          style={{
            height: '400px'
          }}
        >
          <TileLayer attribution="" url={this.state.url} />
          {this.props.items.map(item => (
            <PostMapMarker key={item._id} {...item} />
          ))}
        </Map>
      </div>
    );
  }
}

export default PostMap;
