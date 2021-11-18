import React from 'react';
import { Form } from './components/Form';
import { MapLeaflet } from './components/MapLeaflet';

function App() {
  return (
    <div>
      <MapLeaflet />
      <Form />
    </div>
  );
}

export default App;
