const React = require('react');

module.exports = new Proxy({}, {
  get: function(target, prop) {
    if (prop === '__esModule') return true;
    return function MockIcon(props) {
      return React.createElement('svg', { 'data-testid': `icon-${prop}`, ...props });
    };
  }
});
