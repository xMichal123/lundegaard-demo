import React, { useState, useRef, FC, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { useCookies } from 'react-cookie';
import { Record } from './types';

const RecordEdit: FC = () => {
  {/*const initialFormState = {
    name: '',
    address: '',
    city: '',
    stateOrProvince: '',
    country: '',
    postalCode: ''
  };
  const [record, setRecord] = useState<Record>({id:''});
  const navigate = useNavigate();
  const { id } = useParams();
  const [cookies] = useCookies(['XSRF-TOKEN']);

  useEffect(() => {
    if (id !== 'new') {
      fetch(`/api/record/${id}`)
        .then(response => response.json())
        .then(data => setRecord(data));
    }
  }, [id, setRecord]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setRecord({ ...record, [name]: value })
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    await fetch(`/api/record${record.id ? `/${record.id}` : ''}`, {
      method: record.id ? 'PUT' : 'POST',
      headers: {
        'X-XSRF-TOKEN': cookies['XSRF-TOKEN'],
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record),
      credentials: 'include'
    });
    setRecord(initialFormState);
    navigate('/records');
  }

  const title = <h2>{record.id ? 'Edit Record' : 'Add Record'}</h2>;

  return (<div>
      <AppNavbar/>
      <Container>
        {title}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="from">From</Label>
            <Input type="date" name="from" id="from" value={record.from || ''}
                   onChange={handleChange} autoComplete="from"/>
          </FormGroup>
          <FormGroup>
            <Label for="to">To</Label>
            <Input type="date" name="to" id="to" value={record.to || ''}
                   onChange={handleChange} autoComplete="to"/>
          </FormGroup>
          <FormGroup>
            <Label for="employer">Employer</Label>
            <Input type="text" name="employer" id="employer" value={record.employer || ''}
                   onChange={handleChange} autoComplete="employer"/>
          </FormGroup>
          <div className="row">
            <FormGroup className="col-md-4 mb-3">
              <Label for="customer">Customer</Label>
              <Input type="text" name="customer" id="customer" value={record.customer || ''}
                     onChange={handleChange} autoComplete="customer"/>
            </FormGroup>
            <FormGroup className="col-md-5 mb-3">
              <Label for="projectName">Project Name</Label>
              <Input type="text" name="projectName" id="projectName" value={record.projectName || ''}
                     onChange={handleChange} autoComplete="projectName"/>
            </FormGroup>
            <FormGroup className="col-md-3 mb-3">
              <Label for="projectDescription">Description</Label>
              <Input type="text" name="projectDescription" id="projectDescription" value={record.projectDescription || ''}
                     onChange={handleChange} autoComplete="projectDescription"/>
            </FormGroup>
          </div>
          <FormGroup>
            <Label for="technologies">Technologies</Label>
            <Input type="text" name="technologies" id="technologies" value={record.technologies || ''}
                   onChange={handleChange} autoComplete="technologies"/>
          </FormGroup>
          <FormGroup>
            <Label for="role">Role</Label>
            <Input type="text" name="role" id="role" value={record.role || ''}
                   onChange={handleChange} autoComplete="role"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/records">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )*/}
  return (
    <div>TEST</div>
    );
};

export default RecordEdit;
