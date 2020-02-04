import React, { SyntheticEvent, ReactNode } from 'react';
import { GenericButton } from './Button.styled';

interface Props {
  children?: ReactNode;
  text: string;
  onClick(evt: SyntheticEvent<HTMLButtonElement>): void;
}

export const Button: React.FC<Props> = ({ text, onClick, children }: Props) => {
  return (
    <GenericButton onClick={onClick}>
      {text}
      {children}
    </GenericButton>
  )
};
