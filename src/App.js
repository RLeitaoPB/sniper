import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import CustomRoutes from './routes';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoCLose={3000} />
        <CustomRoutes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
