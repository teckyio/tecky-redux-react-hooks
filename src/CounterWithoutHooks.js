import * as React from 'react';
import "./styles.css";

import {connect} from 'react-redux';

export function Counter(props) {
  const { counter,increment,decrement } = props;
  return (
    <div>
      <h1>
        Hello, {props.name}
        {counter} times
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>({
  counter: state.counter
});

const mapDispatchToProps = (dispatch)=>({
  increment:()=>dispatch({type:"INCREMENT"}),
  decrement:()=>dispatch({type:"DECREMENT"}),
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter);