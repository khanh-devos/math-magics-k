import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import FetchAPI from './components/utils/FetchAPI';
import Calculator from './components/Calculator';

import './css/App.css';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/api/quote" element={<FetchAPI />} />
          <Route path="*" element={<div>If page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
