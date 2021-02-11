import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('renders click me button', () => {
  it('opens overlay with text on button click', () => {
    const { getByText } = render(<App />);
    getByText('Click here');
    fireEvent.click(getByText('Click here'));
    getByText('Nice to see you!');
  });
});
