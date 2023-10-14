import { useState } from "react"
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "../../components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../style/Login.css'
import Footer from "../../components/Footer";

function Login() {
    const [user, SetUser] = useState({
        email: '',
        password: '',
    });
    const { login, resetPassword } = useAuth()
    const navigate = useNavigate();
    const [error, setError] = useState();


    const handleChange = ({ target: { name, value } }) => {
        SetUser({ ...user, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            navigate('/home')
        } catch (error) {
            setError(error.message);
            //console.log(error.code);
            //Dar mensaje de error al register
            // if (error.code === "auth/missing-password") {
            //    setError("correo o contraseña invalidos")
            // }
        }
    }

    const handleResetPassword = async () => {
        if (!user.email) return setError("Por favor ingresar tu email");
        try {
            await resetPassword(user.email);
            setError("Te hemos enviado un email con un enlace para restablecer tu contraseña")
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="grid-layout">
            <div className="login-container"> {/* Clase 'login-container' */}
                {error && <Alert message={error} />}
                <div className="login-content">
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

                        <button className="btn btn-primary btn-block">Iniciar Sesión</button>
                    </form>

                    <a
                        href="#!"
                        className="mt-4 text-center"
                        onClick={handleResetPassword}
                    >
                        Olvidaste tu contraseña?
                    </a>
                    <p className="mt-4 text-center">
                        No tienes una cuenta? <Link to="/register">Registrarse</Link>
                    </p>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;