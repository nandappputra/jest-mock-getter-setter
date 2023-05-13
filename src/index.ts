/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line node/no-extraneous-import
import { MockedObject } from 'jest-mock';

export function setMockProperty<T>(
  mockObject: MockedObject<object>,
  property: string,
  value: T
): (jest.Mock<T, [], object> | jest.Mock<void, [T], MockedObject<object>>)[] {
  const getter = jest.fn<T, [], MockedObject<object>>(() => value);
  const setter = jest.fn<void, [T], MockedObject<object>>();
  Object.defineProperty(mockObject, property, {
    get: getter,
    set: setter,
  });

  return [getter, setter];
}
