type Theme = {
  readonly alpha: string;
  readonly beta: string;
  readonly gamma: string;
  readonly psi: string;
  readonly omega: string;
  readonly link: string;
  readonly pagLinkActive: string;
};

type ThemeCfg = {
  readonly dark: string;
  readonly light: string;
  readonly storage: string;
};

export type { ThemeCfg };
export default Theme;
