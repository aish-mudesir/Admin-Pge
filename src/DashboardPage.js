import React, { useState } from 'react';

const DashboardPage = () => {
  const [tableData, setTableData] = useState([
    { table: 'Table 1', longitude: 'Longitude 1', latitude: 'Latitude 1', capacity: 'Capacity 1', wardens: 'Wardens 1', admin: 'Admin 1', parkingHour: 'Parking Hour 1' },
    { table: 'Table 2', longitude: 'Longitude 2', latitude: 'Latitude 2', capacity: 'Capacity 2', wardens: 'Wardens 2', admin: 'Admin 2', parkingHour: 'Parking Hour 2' },
    // Add more initial rows as needed
  ]);

  const addRow = () => {
    setTableData(prevData => [
      ...prevData,
      { table: '', longitude: '', latitude: '', capacity: '', wardens: '', admin: '', parkingHour: '' }
    ]);
  };

  const handleChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  const handleSave = () => {
    // Handle saving tableData
    console.log('Saving table data:', tableData);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Table</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Capacity</th>
            <th>Wardens</th>
            <th>Admin</th>
            <th>Parking Hour</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <td><input type="text" value={rowData.table} onChange={(e) => handleChange(index, 'table', e.target.value)} /></td>
              <td><input type="text" value={rowData.longitude} onChange={(e) => handleChange(index, 'longitude', e.target.value)} /></td>
              <td><input type="text" value={rowData.latitude} onChange={(e) => handleChange(index, 'latitude', e.target.value)} /></td>
              <td><input type="text" value={rowData.capacity} onChange={(e) => handleChange(index, 'capacity', e.target.value)} /></td>
              <td><input type="text" value={rowData.wardens} onChange={(e) => handleChange(index, 'wardens', e.target.value)} /></td>
              <td><input type="text" value={rowData.admin} onChange={(e) => handleChange(index, 'admin', e.target.value)} /></td>
              <td><input type="text" value={rowData.parkingHour} onChange={(e) => handleChange(index, 'parkingHour', e.target.value)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default DashboardPage;
