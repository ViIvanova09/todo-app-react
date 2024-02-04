import React, {useState} from 'react';

const TodoItem = ({todo}) => {
    return (
        <>
            <li data-id={todo.id}>
				<span>{todo.title}</span>
				<div className="removeTodo"><i className="far fa-trash-alt"></i></div>
			</li>
        </>
    );
};

export default TodoItem;