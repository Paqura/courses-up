import React from 'react';
import { DescriptionText } from './Description.styled';

interface Props {
  description: string;
}

export const Description: React.FC<Props> = ({ description }) => (
  <DescriptionText>{description || 'No description'}</DescriptionText>
);
