import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../style/Register.css';
import Footer from "../../components/Footer";

function Register() {
    const [user, SetUser] = useState({
        email: '',
        password: '',
    });
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({ target: { name, value } }) => {
        SetUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signup(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="grid-layout">
            <div className="register-container">
                {error && <Alert message={error} />}
                <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            onChange={handleChange}
                            placeholder="correo"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            onChange={handleChange}
                            placeholder="*******"
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Registrarse</button>
                </form>

                <p className="mt-4 text-center">
                    Ya tienes una cuenta? <Link to='/login'>Iniciar Sesión</Link>
                </p>
            </div>

            <Footer />

        </div>
    );
}

export default Register;
