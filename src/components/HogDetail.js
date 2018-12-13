import React from 'react'

const HogDetail = (props) => {
  const weightRatio = props.oneHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

  const bestMedal = props.oneHog['highest medal achieved']

  console.log(weightRatio, bestMedal)

  return (
    <div class="extra content">
      <div class="meta">
        <a>Greased?: {props.oneHog.greased ? "Yes" : "No"}</a>
      </div>
      <div class="description">
        Specialty: {props.oneHog.specialty}
      </div>
      <span class="right floated">
        Weight Ratio: {weightRatio}
      </span>
      <span>
        <i class="user icon"></i>
          Highest Medal: {bestMedal}
      </span>
    </div>
  )
}

export default HogDetail
