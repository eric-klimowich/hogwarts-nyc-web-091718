import React from 'react'
import HogDetail from './HogDetail'

class HogTile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  // handleClick = (event) => {
  //   console.log(event.target)
  //
  // }

  clickToggle = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {
    const imageName = this.props.hog.name.toLowerCase().replace(/ /g, "_")
    // console.log("image name is", imageName)
    return (
      <div className="ui link cards">
        <div className="card" onClick={this.clickToggle}>
          <div className="image">
            <img src={require(`../hog-imgs/${imageName}.jpg`)} alt={imageName} />
          </div>
          <div className="content">
            <div className="header">
              Name: {this.props.hog.name}
            </div>
          </div>
          {this.state.clicked ? <HogDetail oneHog={this.props.hog}/> : null}
        </div>
      </div>
    )
  }
}
// <h1 onClick={this.clickToggle} >{this.props.hog.name}</h1>

export default HogTile
