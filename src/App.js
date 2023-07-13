import FetchAPI from './components/utils/FetchAPI';
import Calculator from './components/Calculator';
import NavigationBar from './components/utils/NavigationBar';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FetchAPI />
      <Calculator />
    </div>
  );
}

export default App;
