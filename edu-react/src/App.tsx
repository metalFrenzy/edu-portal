import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './routes/RequireAuth';
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
