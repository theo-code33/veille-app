import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Article from './pages/Article';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;