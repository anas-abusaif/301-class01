import react from 'react';
class HornedBeast extends react.Component {

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} alt={this.props.title}/>
        <p>{this.props.description}</p>
      </>
    )
  }
}
export default HornedBeast;