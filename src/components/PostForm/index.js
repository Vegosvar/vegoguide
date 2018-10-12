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

    // Bind methods to context
    this.onChangeImages = this.onChangeImages.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Initialize state
    this.state = {
      model: cloneDeep(props.post)
    };
  }

  onChange(key, value) {
    this.setState(state => {
      const newModel = cloneDeep(state.model);

      set(newModel, key, value);

      return {
        model: newModel
      };
    });
  }

  onChangeImages(files) {
    console.log(files, this);
  }

  onSubmit() {
    console.log('onSubmit', this.state.model);
  }

  render() {
    const images = (
      <FormGroup>
        <ImageUpload
          accept="image/jpeg, image/png"
          onChange={this.onChangeImages}
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
        <Button onClick={this.onSubmit}>Submit</Button>
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
