import React, {useState} from 'react';
import InputText from './InputText';

export default function Todos() {
    const [todos, setTodos] = useState([]);

    const addTodo = text => setTodos([{text, completed: false}, ...todos]);

    const deleteTodo = i => () =>
        setTodos(todos.filter((_, index) => index !== i));

    const onClick = i => () => {
        setTodos(
            todos.map(
                (todo, index) =>
                    index === i
                        ? {
                              ...todo,
                              completed: !todo.completed
                          }
                        : todo
            )
        );
    };

    return (
        <div>
            <InputText addTodo={addTodo} />
            <div>
                {todos.map(({text, completed}, i) => (
                    <div key={`${text}${i}`} style={{cursor: 'pointer'}}>
                        <span
                            onClick={onClick(i)}
                            style={{
                                textDecoration: completed ? 'line-through' : ''
                            }}
                        >
                            {text}
                        </span>
                        <span onClick={deleteTodo(i)} style={{color: 'red'}}>
                            {' '}
                            x
                        </span>
                    </div>
                ))}
            </div>
            <button onClick={() => setTodos([])}>reset</button>
        </div>
    );
}
