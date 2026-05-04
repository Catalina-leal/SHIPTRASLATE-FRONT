function ShipmentList({ shipments }) {
  if (!shipments.length) {
    return <p>No hay envíos registrados aún.</p>;
  }

  return (
    <section className="list-card">
      <h2>Lista de envíos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Cliente</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id}>
              <td>{shipment.id}</td>
              <td>{shipment.origin}</td>
              <td>{shipment.destination}</td>
              <td>{shipment.client}</td>
              <td>{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ShipmentList;
