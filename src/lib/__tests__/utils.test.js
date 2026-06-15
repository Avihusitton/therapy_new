// Task 17: Tests for src/lib/utils.js cn() function
import { cn } from '../utils';

describe('cn() utility', () => {
  it('merges multiple class strings', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('handles undefined values', () => {
    expect(cn('a', undefined, 'b')).toBe('a b');
  });

  it('tailwind-merge resolves conflicting classes', () => {
    // twMerge should keep the last conflicting utility
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles falsy values', () => {
    expect(cn(false && 'a', 'b')).toBe('b');
  });

  it('handles empty call', () => {
    expect(cn()).toBe('');
  });
});
