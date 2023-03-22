// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { afterAll, afterEach, beforeAll } from '@jest/globals';
import '@testing-library/jest-dom';
import { server } from 'mocks/server';


beforeAll(async () => {
  // Enable the mocking in tests.
  server.listen({
    onUnhandledRequest: 'error',
  });
});

 afterAll(async () => {
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  server.resetHandlers();
  // Clean up once the tests are done.
  server.close();
});

afterEach(async () => {
    // Reset any request handlers that we may add during the tests,
    // so they don't affect other tests.
    server.resetHandlers();
});

