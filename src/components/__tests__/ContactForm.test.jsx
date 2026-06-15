// Task 18: Tests for ContactForm — error and success paths
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, ...props }) => <a {...props}>{children}</a>;
});

const originalFetch = global.fetch;

describe('ContactForm', () => {
  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('shows error message when API returns an error', async () => {
    // Mock window.alert
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });

    render(<ContactForm />);

    // Fill in form fields
    const nameInput = screen.getByPlaceholderText('השם שלך');
    const phoneInput = screen.getByPlaceholderText('מספר הטלפון שלך');

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(phoneInput, { target: { value: '0541234567' } });

    // Submit form
    const submitButton = screen.getByText('שליחת פרטים');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringContaining('שגיאה')
      );
    });

    alertMock.mockRestore();
  });

  it('shows success message when API succeeds and clears the form', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true });

    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText('השם שלך');
    const phoneInput = screen.getByPlaceholderText('מספר הטלפון שלך');

    fireEvent.change(nameInput, { target: { value: 'אביהו' } });
    fireEvent.change(phoneInput, { target: { value: '0541234567' } });

    const submitButton = screen.getByText('שליחת פרטים');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId('contact-form-success')).toBeInTheDocument();
    });
  });
});
