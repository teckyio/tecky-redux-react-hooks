import * as React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from "react-dom";
import {store} from './store';
import Counter from './CounterWithoutHooks';


ReactDOM.render(
  <Provider store={store}>
      <Counter name="Sara" />
  </Provider>, 
  document.getElementById("root")
);