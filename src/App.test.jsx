import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('renders click me button', () => {
  it('opens overlay with text on button click', () => {
    const { getByText } = render(<App />);
    getByText('Click button');
    fireEvent.click(getByText('Click button'));
    getByText('Nice to see you!');
  });
});
