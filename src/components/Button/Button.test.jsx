import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Renders Button component correctly', () => {
  it('changes color after click', () => {
    const { getByText, queryByText } = render(<Button />);
    // initial state is Blue
    getByText(/Blue/);
    // button is clicked
    fireEvent.click(getByText(/Blue/));
    // button changes text to Red
    getByText(/Red/);
    // text Blue is not there anymore
    expect(queryByText(/Blue/)).not.toBeInTheDocument();
  });
});
