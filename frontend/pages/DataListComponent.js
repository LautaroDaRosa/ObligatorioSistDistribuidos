import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';

const DataListComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost/get_data', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const responseData = await response.json();
        const measurements = responseData.measurements;
        const measurementRows = measurements.map(measurement => {
          const shouldHighlight = measurement.value < measurement.min_value || measurement.value > measurement.max_value;
          const className = shouldHighlight ? 'table-danger' : '';
          return (
            <tr key={measurement.medition_id} className={className}>
              <td>{measurement.medition_id}</td>
              <td>{measurement.sensor_id}</td>
              <td>{measurement.ubication}</td>
              <td>{measurement.date}</td>
              <td>{measurement.min_value}</td>
              <td>{measurement.max_value}</td>
              <td>{measurement.value}</td>
            </tr>
          );
        });

        setData(measurementRows);
        setIsLoading(false);
      } catch (error) {
        alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');
        router.push({
          pathname: '/login',
        });
        console.error('Error al obtener los datos:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return  <div className="d-flex justify-content-center align-items-center vh-100">
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
  </div>;
  }

  const tableStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    border: '1px solid #ccc',
  };

  const allStyle = {
    margin: '20px auto',
  }

  return (
    <div style={allStyle}>
      <h1 className="display-4 text-center">Mediciones</h1>
      <div style={tableStyle}>
        <table className="table">
          <thead>
            <tr>
              <th>Medición ID</th>
              <th>Sensor ID</th>
              <th>Ubicación</th>
              <th>Fecha</th>
              <th>Valor Mínimo</th>
              <th>Valor Máximo</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataListComponent;
