import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// Define a GraphQL query to fetch contact requests with filtering
const GET_CONTACT_REQUESTS = gql`
  query getContactRequests(
    $kindOfRequest: String
    $policyNumber: String
    $name: String
    $surname: String
    $startDate: String
    $endDate: String
  ) {
    contactRequests(
      kindOfRequest: $kindOfRequest
      policyNumber: $policyNumber
      name: $name
      surname: $surname
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      kindOfRequest
      policyNumber
      name
      surname
      request
      createdAt
    }
  }
`;

interface ContactRequest {
  id: number;
  kindOfRequest: string;
  policyNumber: string;
  name: string;
  surname: string;
  request: string;
  createdAt: string;
}

const AdminPanel: React.FC = () => {
  const [filters, setFilters] = useState<{
    kindOfRequest: string;
    policyNumber: string;
    name: string;
    surname: string;
    startDate: string;
    endDate: string;
  }>({
    kindOfRequest: '',
    policyNumber: '',
    name: '',
    surname: '',
    startDate: '',
    endDate: '',
  });

  const { loading, error, data } = useQuery<{ getContactRequests: ContactRequest[] }>(
    GET_CONTACT_REQUESTS,
    {
      variables: filters,
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const contactRequests = data?.getContactRequests || [];

  return (
    <div>
      <h1>Contact Requests</h1>
      <div>
        <input
          type="text"
          placeholder="Kind of Request"
          value={filters.kindOfRequest}
          onChange={(e) =>
            setFilters({ ...filters, kindOfRequest: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Policy Number"
          value={filters.policyNumber}
          onChange={(e) =>
            setFilters({ ...filters, policyNumber: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Surname"
          value={filters.surname}
          onChange={(e) =>
            setFilters({ ...filters, surname: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Start Date"
          value={filters.startDate}
          onChange={(e) =>
            setFilters({ ...filters, startDate: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="End Date"
          value={filters.endDate}
          onChange={(e) =>
            setFilters({ ...filters, endDate: e.target.value })
          }
        />
      </div>
      <ul>
        {contactRequests.map((request) => (
          <li key={request.id}>
            <strong>
              {request.kindOfRequest} - {request.policyNumber}
            </strong>
            <p>Name: {request.name} {request.surname}</p>
            <p>Request: {request.request}</p>
            <p>Created At: {request.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
