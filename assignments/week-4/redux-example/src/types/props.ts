export type HeaderProps = {
  title: string;
  text: string;
};

export type CounterProps = {
  initialCount: number;
  counterTitle: string;
  changeText: (text: string) => void;
};
