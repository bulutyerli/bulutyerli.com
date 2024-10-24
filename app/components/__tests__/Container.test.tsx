import { render } from '@testing-library/react';
import Container from '../Container';

describe('container render test suite', () => {
  it('should render container with child and class without error', () => {
    const testClass = 'test-class';
    const testChildren = <h1>test</h1>;

    const { container, getByRole } = render(
      <Container className={testClass}>{testChildren}</Container>
    );

    expect(container.firstChild).toHaveClass('test-class');
    expect(getByRole('heading', { name: /test/i })).toBeInTheDocument();
  });
});
