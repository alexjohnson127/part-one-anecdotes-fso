import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const [popular, setPopular] = useState(0)

  function handleClick(){
    setSelected(Math.floor(Math.random()*8))
  }
  function handleVote(){
    let newPoints = [...points]
    let tempPop = popular
    newPoints[selected] += 1
    for (let i = 0; i<points.length; i++){
      if(newPoints[i]>newPoints[tempPop]){
        tempPop = i
      }
    }
    setPoints(newPoints)
    setPopular(tempPop)
  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <div>{anecdotes[popular]}</div>
    </div>
  )
}

export default App
