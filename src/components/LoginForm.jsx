
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router';
// import AdminPage from "./AdminPage";
import { ToastContainer } from 'react-toastify';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.sucess({ email, password });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-orange-500 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-white-800 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-black-500 mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 bg-white py-2 border rounded-md"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-black-500 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 bg-white border rounded-md"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;

