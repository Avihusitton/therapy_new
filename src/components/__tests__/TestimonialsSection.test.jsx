// Task 19: Tests for TestimonialsSection — fetch success and error paths
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsSection from '../TestimonialsSection';

const originalFetch = global.fetch;

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('TestimonialsSection', () => {
  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('shows reviews when fetch succeeds', async () => {
    const mockCsv = 'name,review,rating,date\nדוד כהן,שירות מצוין ומקצועי,FIVE,2024-01-15T00:00:00';
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve(mockCsv),
    });

    render(<TestimonialsSection />);

    await waitFor(() => {
      expect(screen.getByText(/שירות מצוין ומקצועי/)).toBeInTheDocument();
    });
  });

  it('shows fallback when fetch fails without crashing', async () => {
    // Suppress console.error for this test since we expect it
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    render(<TestimonialsSection />);

    await waitFor(() => {
      // Should show empty state message, not crash
      expect(screen.getByText(/אין ביקורות זמינות/)).toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });
});
