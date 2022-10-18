import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
        {/* v6 redirect 설정 +replace: history 이력X */}
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
		</BrowserRouter>
  );
}

export default App;
