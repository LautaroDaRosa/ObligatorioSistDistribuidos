import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const DataList = () => {
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
        const measurementStrings = measurements.map(measurement => {
          return `Medición ID: ${measurement.medition_id}\nSensor ID: ${measurement.sensor_id}\nUbicación: ${measurement.ubication}\nFecha: ${measurement.date}\nValor Mínimo: ${measurement.min_value}\nValor Máximo: ${measurement.max_value}\nValor: ${measurement.value}`;
        });

        setData(measurementStrings);
        setIsLoading(false);
      } catch (error) {
          alert('Acceso no autorizado. Por favor, inicie sesión nuevamente.');
          router.push(
            {
              pathname: '/login',
            }
          );
        console.error('Error al obtener los datos:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (data.length === 0) {
    return <div>No se encontraron datos.</div>;
  }

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DataList;
