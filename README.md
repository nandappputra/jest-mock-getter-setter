# jest-mock-getter-setter

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

Utility to create a mock for getter & setter. Useful if you want to use dependency injection without having to deal with the actual object's constructor.

## Install

```bash
npm install jest-mock-getter-setter
```

## Usage

```ts
describe('setMockProperty', () => {
  describe('setMockProperty', () => {
    it('should mock a property of MockedObject', () => {
      // mock some module with jest.createMockFromModule
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
```

[build-img]:https://github.com/nandappputra/jest-mock-getter-setter/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/nandappputra/jest-mock-getter-setter/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/jest-mock-getter-setter
[downloads-url]:https://www.npmtrends.com/jest-mock-getter-setter
[npm-img]:https://img.shields.io/npm/v/jest-mock-getter-setter
[npm-url]:https://www.npmjs.com/package/jest-mock-getter-setter
[issues-img]:https://img.shields.io/github/issues/nandappputra/jest-mock-getter-setter
[issues-url]:https://github.com/nandappputra/jest-mock-getter-setter/issues
[codecov-img]:https://codecov.io/gh/nandappputra/jest-mock-getter-setter/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/nandappputra/jest-mock-getter-setter
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
