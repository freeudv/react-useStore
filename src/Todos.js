import React, {useReducer} from 'react';
import InputText from './InputText';

const initState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [{text: action.text, completed: false}, ...state];
        case 'TOGGLE_TODO':
            return state.map(
                (todo, i) =>
                    action.index === i
                        ? {...todo, completed: !todo.completed}
                        : todo
            );
        case 'DELETE_TODO':
            return state.filter((_, i) => i !== action.index);
        case 'RESET_TODO':
            return initState;
        default:
            return state;
    }
};

export default function Todos() {
    const [state, dispatch] = useReducer(reducer, initState);

    const addTodo = text => dispatch({type: 'ADD_TODO', text});
    const deleteTodo = index => () => dispatch({type: 'DELETE_TODO', index});
    const onToggle = index => () => dispatch({type: 'TOGGLE_TODO', index});
    const onReset = () => dispatch({type: 'RESET_TODO'});

    return (
        <div>
            <InputText addTodo={addTodo} />
            <div>
                {state.map(({text, completed}, index) => (
                    <div key={`${text}${index}`} style={{cursor: 'pointer'}}>
                        <span
                            onClick={onToggle(index)}
                            style={{
                                textDecoration: completed ? 'line-through' : ''
                            }}
                        >
                            {text}
                        </span>
                        <span
                            onClick={deleteTodo(index)}
                            style={{color: 'red'}}
                        >
                            {' '}
                            x
                        </span>
                    </div>
                ))}
            </div>
            <button onClick={onReset}>reset</button>
        </div>
    );
}
