import * as React from 'react';
import "./styles.css";
import {useMappedState,useDispatch} from 'redux-react-hook';

export default function Counter(props) {

    const counter = useMappedState(state=> state.counter);
    
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                Hello, {props.name}
                {counter} times
            </h1>
            <div>
                <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
            </div>
        </div>
    );
}