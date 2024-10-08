import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader,Container, Card, CardBody, Row, Col } from 'reactstrap'

const NewGroup = (props) => {
  return (
    <>
    <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody className="btn-showcase">
        <Modal 
          isOpen={props.isOpen}
          
        >
            <ModalHeader  toggle={props.toggleModal}>New Group</ModalHeader>
            <ModalBody>
                Create New Group
            </ModalBody>
            <ModalFooter>
            <button
                        className="btn btn-secondary"
                        onClick={props.toggleModal}
                      >
                        Close
                      </button>
            </ModalFooter>
        </Modal>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </Container>
    </>
  )
}

export default NewGroup
