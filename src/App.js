import UseState from './components/useStateHook/UseState';
import UseRef from './components/useRefHook/UseRef';
import UseReducer from './components/useReducerHook/UseReducer';

import './App.css';
function App() {
  return (
    <div className="App">
      <p>UseState Example</p>
      <UseState className="useState" />
      <hr />
      <p>UseRef Example</p>
      <UseRef />
      <hr />
      <p>UseReducer Example</p>
      <UseReducer />
    </div>
  );
}

export default App;
