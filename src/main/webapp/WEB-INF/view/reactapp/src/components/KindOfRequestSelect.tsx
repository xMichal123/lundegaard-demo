import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// Define a TypeScript interface for the shape of the option object
interface Option {
  id: string;
  name: string;
}

const KIND_OF_REQUESTS_QUERY = gql`
  query {
    getAllRequestKinds {
      id
      name
    }
  }
`;

const KindOfRequestSelect: React.FC = () => {
  const { loading, error, data } = useQuery<{ getAllRequestKinds: Option[] }>(KIND_OF_REQUESTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data!</p>;

  const options = data.getAllRequestKinds;

  return (
    <div className="form-group">
      <label htmlFor="kindOfRequest">Kind of Request</label>
      <select id="kindOfRequest" name="kindOfRequest">
        {options.map((option: Option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KindOfRequestSelect;
