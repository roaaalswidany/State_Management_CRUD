/* mport reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import type { CounterState } from './redux/reducers'
import { decrementAction, resetAction, incrementAction } from './redux/actions'
import { useRef } from 'react' */
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addTask, type Todo } from './redux1/slices'
import Card from './Todo/Todo'
import { useRef, type FormEvent } from 'react'

type State = {todos : {
  todos : Array<Todo>
}}

function App() {
/*   const count : number = useSelector((state : CounterState) => state?.count)
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
  } */

    const text = useRef<HTMLInputElement>(null)
 const todos = useSelector((state : State) => state.todos.todos)
 const dispatch = useDispatch()
const handelAdd = (event : FormEvent) => {
  event.preventDefault()
  if (text.current?.value) {
     dispatch(addTask(text.current?.value))
     text.current.value = ""
  }
}
  return (
    <>
 {/*      <div>
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
      </p> */}
      <form onSubmit={handelAdd}>
        <input type="text" placeholder='task title' ref={text} />
        <input type="submit" value= "add" />
      </form>
      {todos.map((todo) => {
        return (<Card key = {todo.id} todo = {todo}/>)
      })}
    </>
  )
}

export default App
