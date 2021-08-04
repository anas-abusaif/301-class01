import react from 'react';
import { Card, Col, Button } from 'react-bootstrap';
class HornedBeast extends react.Component {

  constructor() {
    super();
    this.state = {
      favorites: 0
    }
  }
  pickFavorite = () => {
    let likes = this.state.favorites;
    this.setState({
      favorites: likes + 1
    })
  };



  render() {
    return (
      
      <Col xs={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.pickFavorite} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              ♡ {this.state.favorites}
            </Card.Text>
            <Button variant="primary" size="lg" onClick={()=>this.props.showDataModal({
              title:this.props.title,
              description:this.props.description,
              image_url:this.props.image_url
              })} >
              zoom on card
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default HornedBeast;