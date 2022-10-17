import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import ListPage from './pages/list';
import DetailPage from './pages/detail';
import RegisterPage from './pages/register';

function App() {
  return (
		<BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/list" element={<ListPage/>} />
        <Route path="/detail" element={<DetailPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
		</BrowserRouter>
  );
}

export default App;
