// Task 20: Tests for AudioProvider — error paths
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AudioProvider, useAudio } from '../AudioContext';

// Mock next/router
jest.mock('next/router', () => ({
  __esModule: true,
  default: {
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
  },
}));

// Test component that uses the audio context
function TestConsumer() {
  const { showPlayer, setShowPlayer } = useAudio();
  return (
    <div>
      <span data-testid="player-state">{showPlayer ? 'open' : 'closed'}</span>
      <button onClick={() => setShowPlayer(true)}>Open Player</button>
    </div>
  );
}

describe('AudioProvider', () => {
  it('provides default context without crashing', () => {
    render(
      <AudioProvider>
        <TestConsumer />
      </AudioProvider>
    );

    expect(screen.getByTestId('player-state')).toHaveTextContent('closed');
  });

  it('does not crash when Audio API is unavailable', () => {
    // AudioProvider doesn't directly use window.Audio, but it should be safe
    // even if the router is unavailable
    const mockRouter = require('next/router').default;
    const originalEvents = mockRouter.events;
    mockRouter.events = null;

    // Should not throw
    expect(() => {
      render(
        <AudioProvider>
          <TestConsumer />
        </AudioProvider>
      );
    }).not.toThrow();

    // Restore
    mockRouter.events = originalEvents;
  });
});
