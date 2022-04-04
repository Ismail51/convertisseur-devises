import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {default as ExchangeForm} from './ExchangeForm'


export default function ExchangeComponent() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ExchangeForm/>
      </Container>
    </React.Fragment>
  );
}