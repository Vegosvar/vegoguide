import React from 'react';
import ReactImageCrop from 'react-image-crop';
import style from './style.module.scss';

class ImageCrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src
    };
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
          src={this.state.src}
          crop={this.state.crop}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default ImageCrop;
