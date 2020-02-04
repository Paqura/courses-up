import React from 'react';

interface DropdownItem {
  action?(): void;
  id: string;
  title: string;
}

interface Props {
  items: DropdownItem[];
}

const Drowpdown: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map(item =>
        <li
          key={item.id}
          onClick={item.action}
        >
          {item.title}
        </li>
      )}
    </div>
  )
};

export default Drowpdown;
