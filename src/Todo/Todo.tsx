import { useDispatch } from "react-redux"
import { deleteTask, editStatuse, editText, type Todo } from "../redux1/slices"
import { useRef, useState, type FormEvent } from "react"


const Card = (props : {todo : Todo}) => {
    const [show, setShow] = useState<boolean>(false)
    const text = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const editStatuseHandel = () => {
        dispatch(editStatuse(props.todo.id))
    }

    const showFormHandel = () => {
        setShow(!show)
    }
        const editTexteHandel = (event : FormEvent) => {
            event.preventDefault()
            if (text.current?.value) {
            dispatch(editText({
            id : props.todo.id,
            text : text.current.value
            }))
        }
        setShow(!show)
    }

    const deleteHandel = () => {
        dispatch(deleteTask(props.todo.id))
    }
    return (
    <div className={`card ${(props.todo.status == "completed") ? "completed" : ""} `}>
        <h1 style={{display : show? "none" : "block"}} >{props.todo.text}</h1>
        <form style={{display : show? "block" : "none"}} onSubmit={editTexteHandel} ref={text}>
        <input type="text" placeholder='task title' defaultValue={props.todo.text}  />
        <input type="submit" value= "edit" />
        </form>
        <button onClick={editStatuseHandel}>edit status</button>
        <button onClick={showFormHandel}>edit text</button>
        <button onClick={deleteHandel}>delete</button>
    </div>
    )
}

export default Card
