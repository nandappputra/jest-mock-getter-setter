import { setMockProperty } from '../src/index';
import { ClientRequest } from 'http';

describe('setMockProperty', () => {
  describe('setMockProperty', () => {
    it('should mock a property of MockedObject', () => {
      const mock = jest.createMockFromModule<ClientRequest>('http');

      setMockProperty(mock, 'finished', true);

      expect(mock.finished).toBe(true);
    });

    it('should should return a setter that can be asserted', () => {
      const mock = jest.createMockFromModule<ClientRequest>('http');

      const [, setter] = setMockProperty(mock, 'finished', true);

      mock.finished = false;

      expect(setter).toBeCalledTimes(1);
      expect(setter).toBeCalledWith(false);
    });

    it('should should return a getter that can be asserted', () => {
      const mock = jest.createMockFromModule<ClientRequest>('http');

      const [getter] = setMockProperty(mock, 'finished', true);

      mock.finished;

      expect(getter).toBeCalledTimes(1);
    });
  });
});
