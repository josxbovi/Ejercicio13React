import React from 'react';
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from 'react-bootstrap';
import { ARRAY_PAISES } from './data.js';

const SearchForm = ({ ubicacion, pais, obtenerDatos }) => {
  return (
    <div className='py-5'>
      <Form onSubmit={(event) => obtenerDatos(event)}>
        <FormGroup className='my-2'>
          <FormLabel>Ingrese un lugar</FormLabel>
          <FormControl type='text' defaultValue={ubicacion} />
        </FormGroup>
        <FormGroup className='my-3'>
          <FormLabel>Ingrese el país</FormLabel>
          <FormSelect defaultValue={pais}>
            {ARRAY_PAISES.map((pais) => (
              <option value={pais} key={pais}>
                {pais}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <Button type='submit'>Consultar</Button>
      </Form>
    </div>
  );
};

export default SearchForm;