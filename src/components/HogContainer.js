import React from 'react'
import HogList  from './HogList'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)


  }



  render() {
    return(
      <div>
        <div>
          <form>
            <div className="radio">
              <label>
                <input type="radio" value="option1" checked={true} />
                Option 1
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option2" />
                Option 2
              </label>
            </div>
          </form>
        </div>
        <div>
          ---------------------
        </div>
        <div>
          ---------------------
        </div>
        <div>
          ---------------------
        </div>
        <div>
          ---------------------
        </div>
        <div>
          ---------------------
        </div>
        <div>
          ---------------------
        </div>
        <div>
          ---------------------
        </div>
        <div>
          ---------------------
        </div>
        <div>
          < HogList allHogs={this.props.hogs} />
        </div>
      </div>

    )
  }
}

export default HogContainer
