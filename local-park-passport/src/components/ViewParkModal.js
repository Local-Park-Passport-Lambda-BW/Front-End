import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import styled from 'styled-components'

const ViewParkModal = (props) => {
  const { className } = props;

  console.log(props)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <div>
      <Button color="danger" onClick={toggle}>Launch Modal</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Park Title</ModalHeader>
        <ModalBody>
          <p>Park Description</p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          <h6>Features</h6>

          <p>Park Ratings</p>
          <p>Park Average Rating</p>
          <button className="reviewButton">Add a Review</button>
          <Input type="textarea" name="text" id="exampleText" placeholder="Leave a comment..."/>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  )
}

export default ViewParkModal
