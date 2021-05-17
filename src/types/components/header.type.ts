export type Header = {
  children: React.ReactNode;
};

export type HeaderLogo = {
  to: string;
  src: string;
  alt: string;
};

export type HeaderInput = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
};
