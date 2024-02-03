import React, {useState} from "react";

const TodoAdd = ({addTodo}) => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e)=>{
        setValue(e.target.value)
    }
    const onClickHandler = (e)=>{
        addTodo(value)
    }
    return (
        <>
    <div className="todo-app">
        <input 
         type="text"
        autoFocus
        placeholder="add todo..."/>
        <button 
        className="todo-add-btn" 
        type="button"
        onClick={onClickHandler}
        >
            Add
        </button>
    </div>
        </>
    )
}
export default TodoAdd; 