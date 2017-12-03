import React from 'react'
import { Modal, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { FieldGroup } from '../utils/helper'

const NewPostForm = (props) => {
  const closeNewPost = this.props
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FieldGroup
          id="username"
          type="text"
          label="Username"
          placeholder="Enter any username"
          />
          <FieldGroup
          id="Title"
          type="text"
          label="Title"
          placeholder="Title"
          />
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Please select a Category</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other"></option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Post</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.closeNewPost}>Cancel</Button>
        <Button>Post</Button>
      </Modal.Footer>
    </div>
  )
}
export default NewPostForm