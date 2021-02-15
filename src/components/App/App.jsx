import './App.css';
import Button from '../Button/Button';
import Alert from '../Alert/Alert';

function App() {
  if (!process.env.REACT_APP_DEV) {
    return <div>Work in progress</div>;
  }

  return (
    <div className="App">
      <h1>My app title</h1>
      <Alert />
      <Button />
    </div>
  );
}

export default App;
