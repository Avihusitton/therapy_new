// jest.setup.js
require('@testing-library/jest-dom');

// Mock framer-motion globally
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef(({ children, initial, animate, exit, transition, whileInView, viewport, ...props }, ref) => (
        React.createElement('div', { ref, ...props }, children)
      )),
      svg: React.forwardRef(({ children, ...props }, ref) => React.createElement('svg', { ref, ...props }, children)),
      path: React.forwardRef(({ children, ...props }, ref) => React.createElement('path', { ref, ...props }, children)),
      circle: React.forwardRef(({ children, ...props }, ref) => React.createElement('circle', { ref, ...props }, children)),
    },
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});

// Mock lucide-react globally
jest.mock('lucide-react', () => {
  const React = require('react');
  return new Proxy({}, {
    get: (target, prop) => {
      return function MockIcon(props) {
        return React.createElement('svg', { 'data-testid': `icon-${prop}`, ...props });
      };
    }
  });
});
