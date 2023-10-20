import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './Components/MainLayout';
import Show from './Pages/Show';
import { GlobalTheme } from './theme';

function App() {
  return (
    <GlobalTheme>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>

          <Route path="/show/:showId" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </GlobalTheme>
  );
}

export default App;
