import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page-card">
      <h2>Bienvenido a Tranship</h2>
      <p>Administra tus envíos y controla el estado de la carga de manera sencilla.</p>
      <div className="page-actions">
        <Link className="button" to="/shipments">
          Ver envíos
        </Link>
        <Link className="button button-secondary" to="/shipments/new">
          Nuevo envío
        </Link>
      </div>
    </section>
  );
}

export default Home;
