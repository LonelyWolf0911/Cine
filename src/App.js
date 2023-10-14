
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Main from './components/api/Main';
import PaginaPrincipal from './components/PaginaPrincipal';
import Recomendados from './components/Recomendados';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './Routes/ProtectedRoute';



function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <Menu />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
          <Route path="recomendados" element={<Recomendados />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;