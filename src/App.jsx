import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Transactions from './Pages/Transactions';
import Categories from './Pages/Categories';
import Setting from './Pages/setting';
import Analytics from './Pages/analytics';
import AuthPage from './Components/Auth/AuthPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<AuthPage/>}/>

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="categories" element={<Categories />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="setting" element={<Setting />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
