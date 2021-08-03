import react from 'react';
import SelectedBeast from './SelectedBeast';
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
      // <div className='animal'>
      //   <h2>{this.props.title}</h2>
      //   <img src={this.props.imgUrl} alt={this.props.title} onClick={this.pickFavorite}/>
      //   <p>{this.props.description}</p>
      //  <p>favorites {this.state.favorites}</p>
      // </div>
      <Col xs={3}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgUrl} onClick={this.pickFavorite} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              ♡ {this.state.favorites}
            </Card.Text>
            <Button variant="primary" size="lg">
              zoom on card
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default HornedBeast;