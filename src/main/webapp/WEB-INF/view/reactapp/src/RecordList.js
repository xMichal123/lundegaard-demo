import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const RecordList = () => {

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(['XSRF-TOKEN']);

  useEffect(() => {
    setLoading(true);

    fetch('api/records')
      .then(response => response.json())
      .then(data => {
        setRecords(data);
        setLoading(false);
      })
  }, []);

  const remove = async (id) => {
    await fetch(`/api/record/${id}`, {
      method: 'DELETE',
      headers: {
        'X-XSRF-TOKEN': cookies['XSRF-TOKEN'],
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(() => {
      let updatedRecords = [...records].filter(i => i.id !== id);
      setRecords(updatedRecords);
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const RecordList = Array.isArray(records)
                             ? records.map(record => {
    //const address = `${record.address || ''} ${record.city || ''} ${record.stateOrProvince || ''}`;
    return <tr key={record.id}>
      <td style={{whiteSpace: 'nowrap'}}>{record.projectName}</td>
      <td>{record.from}</td>
      <td>{record.events.map(event => {
        return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(new Date(event.date))}: {event.title}</div>
      })}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/records/" + record.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => remove(record.id)}>Delete</Button>
        </ButtonGroup>
      </td>
    </tr>
  }) : null;

  return (
    <div>
      <AppNavbar/>
      <Container fluid>
        <div className="float-end">
          <Button color="success" tag={Link} to="/records/new">Add Record</Button>
        </div>
        <h3>My JUG Tour</h3>
        <Table className="mt-4">
          <thead>
          <tr>
            <th width="20%">Name</th>
            <th width="20%">From</th>
            <th>Events</th>
            <th width="10%">Actions</th>
          </tr>
          </thead>
          <tbody>
          {RecordList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default RecordList;
