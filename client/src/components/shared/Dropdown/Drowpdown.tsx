import React from 'react';
import { DropdownItem } from './DropdownItem/DropdownItem';
import { DropdownItemEntity } from './Dropdown.entities';
import { GenericDropdown } from './Dropdown.styled';

interface Props {
  items: DropdownItemEntity[];
}

const Drowpdown: React.FC<Props> = ({ items }) => {
  return (
    <GenericDropdown>
      {items.map(item =>
        <DropdownItem key={item.id} data={item} />
      )}
    </GenericDropdown>
  )
};

export default Drowpdown;
