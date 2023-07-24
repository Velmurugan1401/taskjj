import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Layout from '../layout/layout';


function MainRouter(params) {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Layout />} />
        </Routes>
    )
}

export default MainRouter