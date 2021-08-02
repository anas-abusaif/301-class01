import react from 'react';
import HornedBeast from './HornedBeast'
import data from './data.json'

class Main extends react.Component {
  render() {
    return (
      <>
        <HornedBeast title='short horned buffalo' imgUrl='https://www.africa-wildlife-detective.com/images/buffalo-800-2.jpg' description='The Short-horned Water Buffalo (Bubalus mephistopheles) is an extinct species of Water Buffalo.' />

        <HornedBeast title='Horned desert viper' imgUrl='https://i.pinimg.com/originals/bf/8d/37/bf8d3726824b82c4d9e4a949e7eca29a.jpg' description='The horned viper is a poisonous snake that is active at dusk and during the night.' />
        {
          data.map(element => {
            return <HornedBeast title={element.title} imgUrl={element.image_url} description={element.description} />
          })
        }
      </>
    )
  }
}
export default Main;