import React from 'react';
import ReactImageCrop from 'react-image-crop';
import propTypes from './prop-types';
import style from './style.module.scss';

class ImageCrop extends React.Component {
  constructor(props) {
    super(props);

    // Bind methods to context
    this.onChange = this.onChange.bind(this);
  }

  onChange(crop) {
    this.setState({
      crop
    });
  }

  render() {
    return (
      <div className={style.wrapper}>
        <ReactImageCrop
          src={this.props.src}
          crop={this.state.crop}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

ImageCrop.propTypes = propTypes;

export default ImageCrop;
