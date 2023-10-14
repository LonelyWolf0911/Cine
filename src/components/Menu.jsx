import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/CineMagic.png';
import { useAuth } from "../context/authContext";
import '../style/Menu.css'

const Menu = () => {


    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) { }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={"/Home"} className="navbar-brand">
                    <img src={logo} alt="Logo" className="Logostyle" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/Recomendados"} className="nav-link centered-button">
                                Recomendados
                            </Link>
                        </li>
                        {user ? (
                            <li className="nav-item">
                                <Link to={"/Main"} className="nav-link centered-button">
                                    Películas
                                </Link>
                            </li>
                        ) : null}
                    </ul>
                    <ul className="navbar-nav ml-auto"> {/* Usar "ml-auto" para alinear a la derecha */}
                        {user ? (
                            <li className="nav-item">
                                <button type="button" className="btn btn-danger logout-button" onClick={handleLogout}>
                                    Cerrar Sesión
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to={"/Login"} className="nav-link centered-button">
                                        Iniciar Sesión
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/Register"} className="nav-link centered-button">
                                        Registrarse
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Menu