import FetchAPI from './components/utils/FetchAPI';
import Calculator from './components/Calculator';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
      <FetchAPI />
    </div>
  );
}

export default App;
