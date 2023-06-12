import React, { useState, useEffect } from 'react';

const DataList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        alert(token);
        /*
        const response = await axios.get('http://localhost/get_data', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        */
        const response = await fetch('http://localhost/get_data',{
          method: 'POST',
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        alert(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!data) {
    return <div>No se encontraron datos.</div>;
  }

  if (data.length === 0) {
    return <div>Hay 0 datos.</div>;
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default DataList;
