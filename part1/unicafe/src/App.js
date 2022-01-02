import React, { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {
    good,
    neutral,
    bad,
    totalFeedback,
    average,
    positiveFeedback
  } = props.feedback

  if (totalFeedback === 0) {
    return (
      <p>no feedback given</p>
    )
  }

  return (
    <>
      <h3>statistics</h3>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"average"} value={Math.round(average * 10) / 10} />
          <StatisticLine text={"positive"} value={Math.round(positiveFeedback * 10) / 10} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const totalFeedback = good + neutral + bad
  const average = calculateAverage(good, bad, totalFeedback)
  const positiveFeedback = calculatePositiveFeedback(good, totalFeedback)

  const feedback = {
    good: good,
    neutral: neutral,
    bad: bad,
    totalFeedback: totalFeedback,
    average: average,
    positiveFeedback: positiveFeedback
  }

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <p>give feedback</p>
      <Button text={"good"} onClick={handleGoodClick} />
      <Button text={"neutral"} onClick={handleNeutralClick} />
      <Button text={"bad"} onClick={handleBadClick} />
      <Statistics feedback={feedback} />
    </div>
  )

  function calculateAverage(good, bad, totalFeedback) {
    return ((good - bad) / totalFeedback)
  }

  function calculatePositiveFeedback(good, totalFeedback) {
    return (good / totalFeedback * 100)
  }
}

export default App
