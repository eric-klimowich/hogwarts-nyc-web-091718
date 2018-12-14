import React from 'react'

const HogDetail = (props) => {
  const weightRatio = props.oneHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

  const bestMedal = props.oneHog['highest medal achieved']

  // console.log(weightRatio, bestMedal)

  return (
    <div className="extra content">
      <div className="meta">
        <a>Greased?: {props.oneHog.greased ? "Yes" : "No"}</a>
      </div>
      <div className="description">
        Specialty: {props.oneHog.specialty}
      </div>
      <div className="right floated">
        Weight Ratio: {weightRatio}
      </div>
      <div>
        <i className="trophy icon"></i>
          Highest Medal: {bestMedal}
      </div>
    </div>
  )
}

export default HogDetail
