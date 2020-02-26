import React from 'react';
import { CardTitle } from './Title.styled';

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }) => (
  <CardTitle>
    {title}
  </CardTitle>
);
