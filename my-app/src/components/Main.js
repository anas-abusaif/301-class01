import react from 'react';
import HornedBeast from './HornedBeast'
import data from './data.json'
import { Container, Row } from 'react-bootstrap';
class Main extends react.Component {
  render() {
    console.log(data);
    return (
      <>
      <Container>
        <Row>
        {
          data.map(element => {
            return <HornedBeast 
            showDataModal={this.props.renderModal} 
            title={element.title} 
            image_url={element.image_url} 
            description={element.description} />
          })
        }
        </Row>
        </Container>
      </>
    )
  }
}
export default Main;