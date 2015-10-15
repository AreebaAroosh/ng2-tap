export enum Ng2TapTheme {BS3 = 1, BS4 = 2}

export class Ng2TapConfig {
  private static _theme: Ng2TapTheme;
  static get theme():Ng2TapTheme {
    // hack as for now
    let w: any = window;
    if (w && w.__theme === 'bs4') {
      return Ng2TapTheme.BS4;
    }
    return (this._theme || Ng2TapTheme.BS3);
  }
  static set theme(v:Ng2TapTheme){
    this._theme = v;
  }
}
