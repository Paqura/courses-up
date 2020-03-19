import React from 'react';
import { Header, List, ListItem, Linker } from './Menu.styled';
import { MENU_ITEMS } from './Menu.utils';
import { useLocation } from 'react-router-dom';

const inactiveRoutes = ['register', 'login'].map(path => `/${path}`);

const Menu: React.FC = () => {
  const { pathname } = useLocation();

  if (inactiveRoutes.includes(pathname)) {
    return null;
  }

  return (
    <Header>
      <nav>
        <List>
          {MENU_ITEMS.map(item => (
            <ListItem key={item.title}>
              <Linker to={item.to}>{item.title}</Linker>
            </ListItem>
          ))}
        </List>
      </nav>
    </Header>
  );
};

export default Menu;
