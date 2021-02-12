import { render } from '@testing-library/react';
import App from './App';

describe('Renders App component correctly', () => {
  it('displays correct title', () => {
    const { getByText } = render(<App />);
    getByText('My app title');
  });
});
