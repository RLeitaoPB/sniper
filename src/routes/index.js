import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

export default function CustomRoutes(){
    return(
        <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route exact path="/dashboard" element={<Dashboard />} isPrivate />
        </Routes>
    )
}
