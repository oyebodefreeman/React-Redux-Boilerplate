import React, { Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from '@redux/actions/app';

function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.app.count);
    return (
        <Fragment>
            <h1>Hello, React</h1>
            <button onClick={() => dispatch(addNumber())}>Click me {count}</button>
        </Fragment>
    )
}

export default App;