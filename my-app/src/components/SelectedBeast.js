import react from 'react';
import { Modal, Card, Container } from 'react-bootstrap';
class SelectedBeast extends react.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.animal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Container>
            {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.animal.image_url} onClick={this.pickFavorite} />
              <Card.Body>
                <Card.Text>
                  {this.props.animal.description}
                </Card.Text>
              </Card.Body>
            </Card> */}
            <Card className="text-center">
              <Card.Img variant="top" src={this.props.animal.image_url} onClick={this.pickFavorite} />
              <Card.Body>
                <Card.Text>
                {this.props.animal.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>


        </Modal.Body>
      </Modal>
    )
  }
}
export default SelectedBeast;