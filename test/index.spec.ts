import { setMockProperty } from '../src';
import { MockModule } from './mock_module';

describe('setMockProperty', () => {
  describe('setMockProperty', () => {
    it('should mock a property of MockedObject', () => {
      const mock = jest.createMockFromModule<MockModule>('./mock_module');

      setMockProperty(mock, 'prop', '2');

      expect(mock.prop).toMatch('2');
    });

    it('should should return a setter that can be asserted', () => {
      const mock = jest.createMockFromModule<MockModule>('./mock_module');

      const [, setter] = setMockProperty(mock, 'prop', '2');

      mock.prop = '3';

      expect(setter).toBeCalledTimes(1);
      expect(setter).toBeCalledWith('3');
    });

    it('should should return a getter that can be asserted', () => {
      const mock = jest.createMockFromModule<MockModule>('./mock_module');

      const [getter] = setMockProperty(mock, 'prop', '2');

      mock.prop;

      expect(getter).toBeCalledTimes(1);
    });
  });
});
