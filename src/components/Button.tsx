import { FC } from "react";

type Props = {
  text?: string;
};

export const Button: FC<Props> = ({ text }) => {
  return (
    <button className="button_main">{text ?? "Request early access"}</button>
  );
};
