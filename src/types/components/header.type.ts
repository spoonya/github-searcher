type Inner = {
  children: React.ReactNode;
};

type Logo = {
  to: string;
  src: string;
  alt: string;
};

type Input = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
};

type Toggler = {
  onClick: () => void;
  theme: string;
};

export type { Inner, Logo, Input, Toggler };
