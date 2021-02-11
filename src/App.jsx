import './App.css';
import {
  Button, Popover, OverlayTrigger,
} from 'react-bootstrap';

const popover = (
  <Popover>
    <Popover.Title as="h3">Hello</Popover.Title>
    <Popover.Content>
      Nice to see you!
    </Popover.Content>
  </Popover>
);

function App() {
  return (
    <div className="App">
      <OverlayTrigger trigger="click" overlay={popover}>
        <Button size="lg">Click button</Button>
      </OverlayTrigger>
    </div>
  );
}

export default App;
