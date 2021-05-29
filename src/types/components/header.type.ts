export type Inner = {
  children: React.ReactNode;
};

export type Logo = {
  to: string;
  src: string;
  alt: string;
};

export type Input = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
};

export type Toggler = {
  onClick: () => void;
  theme: string;
};
