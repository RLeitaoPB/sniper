import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/auth';
import CustomRoutes from './routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CustomRoutes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
