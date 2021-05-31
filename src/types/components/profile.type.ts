type Inner = {
  children: React.ReactNode;
};

type Image = {
  src: string;
  alt: string;
};

type Link = {
  children: React.ReactNode;
  href: string;
};

type Item = {
  children: React.ReactNode;
  src: string;
  alt: string;
};

export type { Inner, Image, Link, Item };
