import {
  Button as BootstrapButton,
} from 'react-bootstrap';
import { useState } from 'react';

function Button() {
  const [red, setRed] = useState(false);

  return (
    <BootstrapButton
      variant={red ? 'danger' : 'primary'}
      onClick={() => setRed(!red)}
    >
      {red ? 'Red' : 'Blue'}
      . Click me to change color!
    </BootstrapButton>
  );
}

export default Button;
