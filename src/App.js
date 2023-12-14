import UseState from './components/useStateHook/UseState';
import UseRef from './components/useRefHook/UseRef';
import UseRef1 from './components/useRefHook/UseRefP';
import UseReducer from './components/useReducerHook/UseReducer';
import UseReducer1 from './components/useReducerHook/UseReducerP';
import UseEffect from './components/useEffectHook/UseEffect';
import UseLayoutEffect from './components/useLayoutEffect/UseLayoutEffect';
import ContextTutorial from './components/useContextHook/ContextTutorial';
import UseMemo from './components/useMemoHook/UseMemo';
import UseCallback from './components/useCallbackHook/UseCallback';

import './App.css';
function App() {
  return (
    <div className="App">
      {/* <p>UseState Example</p>
      <UseState className="useState" />
      <hr />
      <p>UseRef Example</p>
      <UseRef />
      <hr />
      <p>UseReducer Example</p>
      <UseReducer1 />
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
      <p>UseCallback Tutorial</p>
      <UseCallback />
      <hr />
      <p>useEffect Example</p>
      <UseEffect /> */}
      <p>UseReducer Example</p>
      <UseReducer1 />
      <hr />
      <p>UseRef Example</p>
      <UseRef1 />
      <hr />
      <p>UseMemo Tutorial</p>
      <UseMemo />
      <hr />
    </div>
  );
}

export default App;
