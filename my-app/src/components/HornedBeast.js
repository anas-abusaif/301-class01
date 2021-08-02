import react from 'react';
class HornedBeast extends react.Component {

  constructor(){
    super();
    this.state={
      favorites:0
    }
  }
pickFavorite=()=>{
  let likes=this.state.favorites;
  this.setState({
    favorites:likes+1
  })
};
  render() {
    return (
      <div className='animal'>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} alt={this.props.title} onClick={this.pickFavorite}/>
        <p>{this.props.description}</p>
       <p>favorites {this.state.favorites}</p>
      </div>
    )
  }
}
export default HornedBeast;