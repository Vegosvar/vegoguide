import React from 'react';
import { cloneDeep, set } from 'lodash';
import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  ImageUpload,
  Label
} from 'components';
import PropTypes from './prop-types';
import style from './style.module.scss';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: cloneDeep(props.post)
    };
  }

  onChange(key, value) {
    const newModel = cloneDeep({ ...this.state.model });
    set(newModel, key, value);

    this.setState({
      model: newModel
    });
  }

  onChangeImages(key, files) {
    console.log(files);
  }

  onSubmit() {
    console.log('onSubmit', this.state.model);
  }

  render() {
    const images = (
      <FormGroup>
        <ImageUpload
          accept="image/jpeg, image/png"
          onChange={this.onChangeImages.bind(this, 'images')}
        />
      </FormGroup>
    );

    const title = (
      <FormGroup>
        <Label id="title">Title</Label>
        <Input
          id="title"
          value={this.state.model.title}
          onChange={e => this.onChange('title', e.target.value)}
        />
      </FormGroup>
    );

    const submit = (
      <FormGroup>
        <Button onClick={this.onSubmit.bind(this)}>Submit</Button>
      </FormGroup>
    );

    return (
      <form className={style.form} noValidate>
        <Row>
          <Col>{images}</Col>
        </Row>
        <Container>
          <Row>
            <Col>{title}</Col>
          </Row>
          <Row>
            <Col>
              <div className="mt-2">{submit}</div>
            </Col>
          </Row>
        </Container>
      </form>
    );
  }
}

PostForm.propTypes = PropTypes;

export default PostForm;
