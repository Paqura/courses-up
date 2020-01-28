import React, { SyntheticEvent } from 'react';

interface Props {
  text: string;
  onClick(evt: SyntheticEvent<HTMLButtonElement>): void;
}

export const Button: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
};
