import react from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends react.Component{
  render(){
    return(
      <>
        <Header/>
        <div className='main'>
        <Main/>
        </div>
        <Footer/>
      </>
    )
  }
}

export default App;