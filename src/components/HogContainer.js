import React from 'react'
import HogList  from './HogList'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      alphabetize: false,
      onlyGreased: false,
      onlyNonGreased: false
    }
  }

  handleCheck = (event) => {
    // console.log(event.target.checked)
    // console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.checked
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Alphabetize?:
          </label>
          <input
            name="alphabetize"
            type="checkbox"
            onChange={this.handleCheck}
          />
          <label>
            Only Greased Pigs:
          </label>
          <input
            name="onlyGreased"
            type="checkbox"
            onChange={this.handleCheck}
          />
          <label>
            Only Non-Greased Pigs:
          </label>
          <input
            name="onlyNonGreased"
            type="checkbox"
            onChange={this.handleCheck}
          />
        </form>
        < HogList
          allHogs={this.props.hogs}
          alphabetize={this.state.alphabetize}
          onlyGreased={this.state.onlyGreased}
          onlyNonGreased={this.state.onlyNonGreased}
        />
      </div>
    )
  }
}

export default HogContainer
