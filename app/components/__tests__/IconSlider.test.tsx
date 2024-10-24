import { render, screen } from '@testing-library/react';
import IconSlider from '../IconSlider';

describe('IconSlider component test suite', () => {
  const mockIcon = <svg data-testid="mock-icon" />;
  it('should render component', () => {
    render(<IconSlider height="50" width="30" icon={mockIcon} />);

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('should use correct width and height styles', () => {
    const { container } = render(
      <IconSlider height="50" width="100" icon={mockIcon} />
    );

    const liElement = container.querySelector('li');

    expect(liElement).toHaveStyle('top: 50px');
    expect(liElement).toHaveStyle('left: 100px');
  });
});
