import { render, screen } from '@testing-library/react';
import SocialIcons from './SocialIcons';

describe('SocialIcons component test', () => {
  it('should render all icons with correct links', () => {
    render(<SocialIcons />);

    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/bulutyerli');

    const linkedInLink = screen.getByLabelText('LinkedIn');
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/bulutyerli/'
    );

    const gmailLink = screen.getByLabelText('Gmail');
    expect(gmailLink).toHaveAttribute('href', 'mailTo:hello@bulutyerli.com');
  });
});