import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import { renderWithProvider } from '../__tests__/utils';
import ContactForm from './ContactForm';

jest.mock('@emailjs/browser');

describe('Contact Form Component', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the form correctly', () => {
    renderWithProvider(<ContactForm />, 'Contact');

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /send/i }));
  });

  it('should show validation error when fields are empty', async () => {
    const user = userEvent.setup();
    renderWithProvider(<ContactForm />, 'Contact');

    const sendButton = screen.getByRole('button', { name: /send/i });

    await user.click(sendButton);

    expect(
      await screen.findByText(/Please write your name/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please write your E-Mail/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please write your message/i)
    ).toBeInTheDocument();
  });

  it('should show an error when emailjs fails', async () => {
    (emailjs.send as jest.Mock).mockRejectedValueOnce(
      new Error('Failed to send message')
    );
    const user = userEvent.setup();
    renderWithProvider(<ContactForm />, 'Contact');
    const nameField = screen.getByLabelText(/full name/i);

    const emailField = screen.getByLabelText(/e-mail/i);
    const messageField = screen.getByLabelText(/message/i);

    const sendButton = screen.getByRole('button', { name: /send/i });

    await user.type(nameField, 'Test User');
    await user.type(emailField, 'test@test.com');
    await user.type(messageField, 'test message');

    await user.click(sendButton);

    const errorMessage = await screen.findByText(
      /Something went wrong, please try again/i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it('should show success message when emailjs sends the message and resets form', async () => {
    (emailjs.send as jest.Mock).mockResolvedValueOnce({ status: 200 });
    const user = userEvent.setup();
    renderWithProvider(<ContactForm />, 'Contact');
    const nameField = screen.getByLabelText(/full name/i);

    const emailField = screen.getByLabelText(/e-mail/i);
    const messageField = screen.getByLabelText(/message/i);

    const sendButton = screen.getByRole('button', { name: /send/i });

    await user.type(nameField, 'Test User');
    await user.type(emailField, 'test@test.com');
    await user.type(messageField, 'test message');

    await user.click(sendButton);

    const successMessage = await screen.findByText(
      /Thank you for your message!/i
    );

    expect(successMessage).toBeInTheDocument();

    expect(nameField).toHaveValue('');
    expect(emailField).toHaveValue('');
    expect(messageField).toHaveValue('');
  });
});
