import React from 'react';
import Dropzone from 'react-dropzone';
import propTypes from 'prop-types';
import style from './style.module.scss';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    // Bind methods to context
    this.onDrop = this.onDrop.bind(this)

    // Initialize state
    this.state = {
      files: []
    };
  }

  onDrop(files) {
    this.setState(state => ({
      files: [...state.files, ...files]
    }));

    this.props.onChange(this.state.files);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Dropzone
          onDrop={this.onDrop}
          className={style.dropzone}
          activeClassName={style.active}
        />
      </div>
    );
  }
}

ImageUpload.propTypes = propTypes;

export default ImageUpload;
