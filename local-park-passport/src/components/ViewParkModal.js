import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

const ViewParkModal = (props) => {
  const { park, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <div>
      <button className="viewButton" onClick={toggle}>view</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{park.name}</ModalHeader>
        <ModalBody>
          <p>{park.description}</p>
          <p>{park.city}</p>
          <p>{park.country}</p>

          <h6>Features</h6>

          <p>Park Ratings</p>
          <p>{park.average_rating}</p>
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
