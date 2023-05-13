export class MockModule {
  private _prop: string;

  constructor(prop: string) {
    this._prop = prop;
  }

  get prop(): string {
    return this._prop;
  }

  set prop(newProp: string) {
    this._prop = newProp;
  }
}
