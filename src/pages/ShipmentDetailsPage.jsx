import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchShipmentById } from '../services/api.js';

function ShipmentDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadShipment() {
      try {
        const data = await fetchShipmentById(id);
        setShipment(data);
      } catch (err) {
        setError('Error al cargar el envío');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadShipment();
  }, [id]);

  if (loading) return <section className="page-card"><p>Cargando...</p></section>;
  if (error) return <section className="page-card"><p className="error">{error}</p></section>;
  if (!shipment) return <section className="page-card"><p>Envío no encontrado</p></section>;

  return (
    <section className="page-card">
      <h2>Detalles del Envío EDI</h2>
      <button onClick={() => navigate('/shipments')} className="back-btn">← Volver</button>
      
      <table className="shipment-details-table">
        <tbody>
          <tr>
            <td className="label">Naviera:</td>
            <td>{shipment.naviera || '-'}</td>
          </tr>
          <tr>
            <td className="label">BL:</td>
            <td>{shipment.bl || '-'}</td>
          </tr>
          <tr>
            <td className="label">Fecha de Emisión:</td>
            <td>{shipment.fechaEmision || '-'}</td>
          </tr>
          <tr>
            <td className="label">Puerto de Inicio:</td>
            <td>{shipment.puertoInicio || '-'}</td>
          </tr>
          <tr>
            <td className="label">Puerto de Embarque:</td>
            <td>{shipment.puertoEmbarque || '-'}</td>
          </tr>
          <tr>
            <td className="label">Puerto de Descarga:</td>
            <td>{shipment.puertoDescarga || '-'}</td>
          </tr>
          <tr>
            <td className="label">Destino Final:</td>
            <td>{shipment.destinoFinal || '-'}</td>
          </tr>
          <tr>
            <td className="label">Prepaid/Collect:</td>
            <td>{shipment.prepaidCollect || '-'}</td>
          </tr>
          <tr>
            <td className="label">Contrato:</td>
            <td>{shipment.contrato || '-'}</td>
          </tr>
        </tbody>
      </table>

      <h3>Primera Nave</h3>
      <table className="shipment-details-table">
        <tbody>
          <tr>
            <td className="label">Viaje:</td>
            <td>{shipment.primerViaje || '-'}</td>
          </tr>
          <tr>
            <td className="label">Lloyd (Código):</td>
            <td>{shipment.primeraNaveLloyd || '-'}</td>
          </tr>
          <tr>
            <td className="label">Nombre:</td>
            <td>{shipment.primeraNaveName || '-'}</td>
          </tr>
          <tr>
            <td className="label">Puerto Embarque:</td>
            <td>{shipment.puertoEmbarque || '-'}</td>
          </tr>
          <tr>
            <td className="label">Puerto Descarga:</td>
            <td>{shipment.puertoDescarga || '-'}</td>
          </tr>
        </tbody>
      </table>

      {shipment.segundoViaje && (
        <>
          <h3>Segunda Nave</h3>
          <table className="shipment-details-table">
            <tbody>
              <tr>
                <td className="label">Viaje:</td>
                <td>{shipment.segundoViaje || '-'}</td>
              </tr>
              <tr>
                <td className="label">Lloyd (Código):</td>
                <td>{shipment.segundaNaveLloyd || '-'}</td>
              </tr>
              <tr>
                <td className="label">Nombre:</td>
                <td>{shipment.segundaNaveNombre || '-'}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      <div className="shipment-info">
        <p><strong>Cliente:</strong> {shipment.client}</p>
        <p><strong>Estado:</strong> {shipment.status}</p>
        <p><strong>Peso:</strong> {shipment.weight} KG</p>
        <p><strong>ID:</strong> {shipment._id}</p>
        <p><strong>Creado:</strong> {new Date(shipment.createdAt).toLocaleString('es-ES')}</p>
      </div>
    </section>
  );
}

export default ShipmentDetailsPage;
