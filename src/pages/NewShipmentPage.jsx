import ShipmentForm from '../components/ShipmentForm.jsx';
import { useNavigate } from 'react-router-dom';
import { saveShipment } from '../services/api.js';

function NewShipmentPage() {
  const navigate = useNavigate();

  async function handleSave(shipment) {
    await saveShipment(shipment);
    navigate('/shipments');
  }

  return (
    <section className="page-card">
      <h2>Nuevo envío</h2>
      <ShipmentForm onSave={handleSave} />
    </section>
  );
}

export default NewShipmentPage;
