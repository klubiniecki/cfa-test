import { render } from '@testing-library/react';
import Alert from './Alert';

describe('Renders Alert component correctly', () => {
  it('displays alert with correct text', () => {
    const { getByText } = render(<Alert />);
    getByText('hello world');
  });
});
