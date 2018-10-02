import React from 'react';
import Dropzone from 'react-dropzone';
import style from './style.module.scss';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    const { accept = [] } = props;

    this.onChange = props.onChange || function() {};

    this.state = {
      accept,
      disablePreview: false,
      files: []
    };
  }

  onDrop(files) {
    this.setState({
      files: [...this.state.files, ...files]
    });

    this.onChange(this.state.files);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          className={style.dropzone}
          activeClassName={style.active}
        />
      </div>
    );
  }
}

export default ImageUpload;
