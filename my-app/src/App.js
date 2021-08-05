import react from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';

class App extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      animal: {}
    }
  }
  openModal = (data) => {
    this.setState({
      show: true,
      animal: data
    })
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <>
        <Header />
        <Main renderModal={this.openModal} />

        <Footer />

        <SelectedBeast animal={this.state.animal} showModal={this.state.show} closeModal={this.handleClose} />
      </>
    )
  }
}

export default App;