import { Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import SinglePage from './pages/SinglePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/:id" element={<SinglePage />} />
      <Route path="/:id/notfound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
