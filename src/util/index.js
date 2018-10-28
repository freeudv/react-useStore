import {useState} from 'react';

export const intputTextValue = initValue => {
    const [value, setValue] = useState(initValue);

    return {
        value,
        onChange: e => {
            setValue(e.target.value);
        },
        resetVal: () => setValue(initValue)
    };
};
