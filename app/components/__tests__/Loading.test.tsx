import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading component', () => {
  it('should render correctly', () => {
    render(<Loading />);

    expect(screen.getByRole('status')).toBeInTheDocument();

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
