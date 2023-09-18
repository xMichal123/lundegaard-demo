import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KindOfRequestSelect: React.FC = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  // Other form state variables

  useEffect(() => {
    // Fetch options from the backend when the component mounts
    axios.get('/api/request-kinds/list')
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });
  }, []);


  return (
    <div className="form-group">
      <label htmlFor="kindOfRequest">Kind of Request</label>
      <select id="kindOfRequest" name="kindOfRequest">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KindOfRequestSelect;
