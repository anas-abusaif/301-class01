import react from 'react';
import HornedBeast from './HornedBeast'
import data from './data.json'
import { Container, Row } from 'react-bootstrap';
class Main extends react.Component {
  constructor() {
    super()
    this.state = {
      rendered: data
    }
  }

  filterFunction = (event) => {
    if (event.target.value == 1) {
      this.setState({
        rendered: data.filter(element => element.horns == 1)
      })
    } else if (event.target.value == 2) {
      this.setState({
        rendered: data.filter(element => element.horns == 2)
      })
    } else if (event.target.value == 3) {
      this.setState({
        rendered: data.filter(element => element.horns == 3)
      })
    } else if (event.target.value == 100) {
      this.setState({
        rendered: data.filter(element => element.horns == 100)
      })
    } else if (event.target.value == "all") {
      this.setState({
        rendered: data
      })
    }
  }
  render() {
    return (
      <>



       
<select className="browser-default custom-select" onChange={this.filterFunction}>
          <option>Choose number of horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
          <option value="all">All</option>
        </select>




        <Container>
          <Row>
            {
              this.state.rendered.map(element => {
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