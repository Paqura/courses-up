import React from 'react';
import { Header, List, ListItem, Linker } from './Menu.styled';
import { MENU_ITEMS } from './Menu.utils';
import { useLocation } from 'react-router-dom';

const inactiveRoutes = ['register', 'login'].map(path => `/${path}`);

interface Props {
  isAuth: boolean;
}

const Menu: React.FC<Props> = ({ isAuth }) => {
  const { pathname } = useLocation();

  if (inactiveRoutes.includes(pathname)) {
    return null;
  }

  const FILTERED_MENU_ITEMS = MENU_ITEMS
    .filter(item => !(isAuth && ['login', 'register'].includes(item.title.toLocaleLowerCase())));

  return (
    <Header>
      <nav>
        <List>
          {FILTERED_MENU_ITEMS.map(item => (
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
