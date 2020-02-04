import React from 'react';
import { DropdownItemEntity } from '../Dropdown.entities';
import { GenericDropdownItem } from './DropdownItem.styled';

interface Props {
  data: DropdownItemEntity;
}

export const DropdownItem: React.FC<Props> = ({ data: { action, title } }) => {
  return (
    <GenericDropdownItem
      onClick={action}
    >
      {title}
    </GenericDropdownItem>
  )
};
