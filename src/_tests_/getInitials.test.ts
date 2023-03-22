import { describe, expect, test } from '@jest/globals';
import { getInitials } from "../helpers";

describe('get user name initials', () => {
    test('get the first initials of user first and last name', () => {
        expect(getInitials('Victor Okoroji')).toBe('VO');
      })

    test('return undefined when a single name is provided', () => {
        expect(() => getInitials('Victor')).toThrow(Error)
      })

    test('return undefined when no name is provided', () => {
        expect(() => getInitials('')).toThrow(Error)
      })
  });
