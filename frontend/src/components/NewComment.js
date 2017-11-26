import React from 'react'
import { Modal, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { FieldGroup } from '../utils/helper'

const NewComment = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>New Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FieldGroup
          id="username"
          type="text"
          label="username"
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
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button >Close</Button>
      </Modal.Footer>
    </div>
  )
}
export default NewComment