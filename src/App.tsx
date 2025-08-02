import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import type { CounterState } from './redux/reducers'
import { decrementAction, resetAction, incrementAction } from './redux/actions'
import { useRef } from 'react'

function App() {
  const count : number = useSelector((state : CounterState) => state?.count)
  const num = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const increment = () => {
    if (num.current?.value) {
      dispatch(incrementAction(parseInt(num.current?.value)))
      num.current.value = ""
    }
  }

    const decrement = () => {
      if (num.current?.value) {
      dispatch(decrementAction(parseInt(num.current?.value)))
      num.current.value = ""
    }
  }

      const reset = () => {
    dispatch(resetAction())
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input type="text" placeholder='enter payload' ref={num} />
      <div className="card">
        <p>{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
