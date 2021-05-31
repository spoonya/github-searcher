type Inner = {
  children: React.ReactNode;
  fullHeight?: boolean;
};

type Image = {
  src: string;
  alt: string;
};

type Text = {
  children: React.ReactNode;
};

export type { Inner, Image, Text };
