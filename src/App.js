import UseState from './components/useStateHook/UseState';
import UseRef from './components/useRefHook/UseRef';

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
    </div>
  );
}

export default App;
