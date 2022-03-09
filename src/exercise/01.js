// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INC':
      return {count: state.count + action.value}
    default:
      throw new Error('WTF')
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [{count}, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => dispatch({type: 'INC', value: step})
  // const increment = () => setCount(currentState => ({count: count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
