import React from 'react';
import {intputTextValue} from './util';

export default function InputText({addTodo}) {
    const {resetVal, ...text} = intputTextValue('');

    const addOnSubmit = e => {
        e.preventDefault();
        addTodo(text.value);
        resetVal();
    };

    return (
        <form onSubmit={addOnSubmit}>
            <input type="text" {...text} />
        </form>
    );
}
