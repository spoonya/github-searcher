export type Header = {
  children: React.ReactNode;
};

export type HeaderLogo = {
  to: string;
  src: string;
  alt: string;
};

export type HeaderInput = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
};
