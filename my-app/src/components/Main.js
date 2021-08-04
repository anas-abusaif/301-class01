import react from 'react';
import HornedBeast from './HornedBeast'
import data from './data.json'
import { Container, Row, Form } from 'react-bootstrap';
class Main extends react.Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    console.log(data);
    return (
      <>



        <Form.Select aria-label="Default select example">
          <option>choose number of horns</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">one hundred</option>
        </Form.Select>




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