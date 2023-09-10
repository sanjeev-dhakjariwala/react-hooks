import UseState from './components/useStateHook/UseState';
import UseRef from './components/useRefHook/UseRef';
import UseReducer from './components/useReducerHook/UseReducer';
import UseEffect from './components/useEffectHook/UseEffect';
import UseLayoutEffect from './components/useLayoutEffect/UseLayoutEffect';
import ContextTutorial from './components/useContextHook/ContextTutorial';
import UseMemo from './components/useMemoHook/UseMemo';

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
      <hr />
      <p>UseLayoutEffect Hook</p>
      <UseLayoutEffect />
      <hr />
      <p>ContextAPI Example</p>
      <ContextTutorial />
      <hr />
      <p>UseMemo Tutorial</p>
      <UseMemo />
      <hr />
      <p>useEffect Example</p>
      <UseEffect />
    </div>
  );
}

export default App;
