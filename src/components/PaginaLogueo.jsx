import React from 'react';
import '../style/GridLayout.css'
import { useAuth } from '../context/authContext';
import Footer from './Footer';

const PaginaLogueo = () => {
  const { user, loading } = useAuth()



  if (loading) return <h1> CARGAND... </h1>

  return (
    <div className="grid-layout">
      <header className="header " >
        <figure className="text-center ">
          <h3>¡Bienvenido {user.email}!</h3>
        </figure>

      </header>
      <main className="content">
        <p className=' bg-ligth fs-5'>
        CineMagic, donde la magia del cine cobra vida. Sumérgete en un mundo de emocionantes historias, acción, romance y aventuras desde la comodidad de tu dispositivo. Con una extensa biblioteca de películas de todos los géneros y épocas, CineMagic te brinda una experiencia cinematográfica única. Descubre nuevos mundos, explora emocionantes tramas y disfruta de la magia del cine, todo en un solo lugar: CineMagic.
        </p>
      </main>
      <aside className="sidebar">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Querido Diario</div>
              Comedia, Dramática
            </div>
            <span className="badge bg-primary rounded-pill">1h 40min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Insidious: La Puerta Roja</div>
              Terror, Fantasia
            </div>
            <span className="badge bg-primary rounded-pill">1h 48min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Gran Turismo</div>
              Accion, Drama
            </div>
            <span className="badge bg-primary rounded-pill">2h 14min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Blue Beetle</div>
              Aventura, Ciencia Ficción
            </div>
            <span className="badge bg-primary rounded-pill">2h 08min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Megalodon 2: La fosa</div>
              Suspenso, Accion
            </div>
            <span className="badge bg-primary rounded-pill">1h 56min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">No tengas miedo</div>
              Terror, Drama
            </div>
            <span className="badge bg-primary rounded-pill">1h 28min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Alma Mahler</div>
              Romantico
            </div>
            <span className="badge bg-primary rounded-pill">1h 29min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">La guerra de los Lulus</div>
              Aventura
            </div>
            <span className="badge bg-primary rounded-pill">1h 49min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">El viaje de Harold</div>
              Drama
            </div>
            <span className="badge bg-primary rounded-pill">1h 48min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Oppenheimer</div>
              Historico, Suspenso
            </div>
            <span className="badge bg-primary rounded-pill">3h 01min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Gran Turismo</div>
              Drama, Acción
            </div>
            <span className="badge bg-primary rounded-pill">2h 15min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Barbie</div>
              Comedia, Fantástica
            </div>
            <span className="badge bg-primary rounded-pill">1h 54min</span>
          </li>
        </ol>
      </aside>
      <Footer />
    </div>
  );
};

export default PaginaLogueo;