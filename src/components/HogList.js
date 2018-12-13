import React from 'react'
import HogTile from './HogTile'

const HogList = props => {
  // console.log(props.allHogs)

  const hogsArray = props.allHogs.map(hog => {
    return < HogTile hog={hog} />
  })

  return (
    <div className="ui grid container">
      {hogsArray}
    </div>
  )
}

export default HogList
