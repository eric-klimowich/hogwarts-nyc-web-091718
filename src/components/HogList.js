import React from 'react'
import HogTile from './HogTile'

const HogList = props => {
  // console.log(props.allHogs)
  // console.log(props.alphabetize)
  // console.log(props.onlyNonGreased)

  // const hogsArray = props.allHogs.map(hog => {
  //   return < HogTile hog={hog} />
  // })
  // console.log(hogsArray)

  function renderHogs(arrayOfHogs) {
    return arrayOfHogs.map(hog => {
      return < HogTile hog={hog} />
    })
  }

  const greasedHogsArray = props.allHogs.filter(hog => {
    // console.log(hog.greased)
    return hog.greased === true
  })

  const nonGreasedHogsArray = props.allHogs.filter(hog => {
    // console.log(hog.greased)
    return hog.greased === false
  })
  // console.log(greasedHogsArray)

  const alphabetizedHogsArray = props.allHogs.slice().sort((a, b) => {
    // console.log(a.name)
    // console.log(b.name)
    const nameA = a.name
    const nameB = b.name
    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0
    })

    // console.log(props.allHogs)
    // console.log(props.onlyGreased)
  return (
    <div className="ui grid container">
      {props.alphabetize ? renderHogs(alphabetizedHogsArray) : props.onlyGreased ? renderHogs(greasedHogsArray) : props.onlyNonGreased ? renderHogs(nonGreasedHogsArray) : renderHogs(props.allHogs)}
    </div>
  )
}
// {props.onlyNonGreased ? renderHogs(nonGreasedHogsArray) : renderHogs(props.allHogs)}

// {props.onlyGreased ? renderHogs(greasedHogsArray) : renderHogs(props.allHogs)}

// {props.alphabetize ? renderHogs(alphabetizedHogsArray) : renderHogs(props.allHogs)}
export default HogList
